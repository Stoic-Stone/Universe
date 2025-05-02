/*
  # University Management System Database Schema

  1. New Tables
    - universities (Moroccan universities)
    - faculties (University faculties/schools)
    - departments
    - professors
    - students
    - courses
    - enrollments
    - attendance
    - grades
    - academic_years
    - semesters
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    
  3. Initial Data
    - Populated with real Moroccan university data
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Universities
CREATE TABLE IF NOT EXISTS universities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  name_ar text,
  city text NOT NULL,
  address text,
  website text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Faculties
CREATE TABLE IF NOT EXISTS faculties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  university_id uuid REFERENCES universities(id) ON DELETE CASCADE,
  name text NOT NULL,
  name_ar text,
  code text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Departments
CREATE TABLE IF NOT EXISTS departments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  faculty_id uuid REFERENCES faculties(id) ON DELETE CASCADE,
  name text NOT NULL,
  name_ar text,
  code text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Academic Years
CREATE TABLE IF NOT EXISTS academic_years (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  year text NOT NULL UNIQUE,
  start_date date NOT NULL,
  end_date date NOT NULL,
  is_current boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Semesters
CREATE TABLE IF NOT EXISTS semesters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  academic_year_id uuid REFERENCES academic_years(id) ON DELETE CASCADE,
  name text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Professors
CREATE TABLE IF NOT EXISTS professors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  department_id uuid REFERENCES departments(id),
  user_id uuid REFERENCES auth.users(id),
  first_name text NOT NULL,
  last_name text NOT NULL,
  cin text NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  phone text,
  office_number text,
  academic_rank text,
  hire_date date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Students
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  department_id uuid REFERENCES departments(id),
  student_id text NOT NULL UNIQUE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  cin text NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  phone text,
  date_of_birth date,
  address text,
  enrollment_date date,
  current_semester integer,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Courses
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  department_id uuid REFERENCES departments(id),
  code text NOT NULL,
  name text NOT NULL,
  name_ar text,
  description text,
  credits integer NOT NULL,
  hours integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Course Offerings
CREATE TABLE IF NOT EXISTS course_offerings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  professor_id uuid REFERENCES professors(id),
  semester_id uuid REFERENCES semesters(id),
  section text NOT NULL,
  capacity integer NOT NULL,
  schedule jsonb,
  room text,
  created_at timestamptz DEFAULT now()
);

-- Enrollments
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  course_offering_id uuid REFERENCES course_offerings(id) ON DELETE CASCADE,
  enrollment_date timestamptz DEFAULT now(),
  status text DEFAULT 'enrolled',
  created_at timestamptz DEFAULT now(),
  UNIQUE(student_id, course_offering_id)
);

-- Attendance
CREATE TABLE IF NOT EXISTS attendance (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id uuid REFERENCES enrollments(id) ON DELETE CASCADE,
  date date NOT NULL,
  status text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Grades
CREATE TABLE IF NOT EXISTS grades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id uuid REFERENCES enrollments(id) ON DELETE CASCADE,
  type text NOT NULL,
  score numeric(5,2) NOT NULL,
  max_score numeric(5,2) NOT NULL,
  weight numeric(5,2) NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE universities ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculties ENABLE ROW LEVEL SECURITY;
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE academic_years ENABLE ROW LEVEL SECURITY;
ALTER TABLE semesters ENABLE ROW LEVEL SECURITY;
ALTER TABLE professors ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_offerings ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE grades ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Enable read access for authenticated users" ON universities
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable read access for authenticated users" ON faculties
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable read access for authenticated users" ON departments
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable read access for authenticated users" ON academic_years
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable read access for authenticated users" ON semesters
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Professors can read their own data" ON professors
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Students can read their own data" ON students
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Enable read access for authenticated users" ON courses
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable read access for authenticated users" ON course_offerings
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Students can read their own enrollments" ON enrollments
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM students
      WHERE students.user_id = auth.uid()
      AND students.id = enrollments.student_id
    )
  );

CREATE POLICY "Students can read their own attendance" ON attendance
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM enrollments
      JOIN students ON students.id = enrollments.student_id
      WHERE students.user_id = auth.uid()
      AND enrollments.id = attendance.enrollment_id
    )
  );

CREATE POLICY "Students can read their own grades" ON grades
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM enrollments
      JOIN students ON students.id = enrollments.student_id
      WHERE students.user_id = auth.uid()
      AND enrollments.id = grades.enrollment_id
    )
  );

-- Insert initial data
INSERT INTO universities (name, name_ar, city, website) VALUES
  ('Mohammed V University', 'جامعة محمد الخامس', 'Rabat', 'http://www.um5.ac.ma'),
  ('Hassan II University', 'جامعة الحسن الثاني', 'Casablanca', 'http://www.univh2c.ma'),
  ('Cadi Ayyad University', 'جامعة القاضي عياض', 'Marrakech', 'https://www.uca.ma'),
  ('Ibn Tofail University', 'جامعة ابن طفيل', 'Kenitra', 'http://www.uit.ac.ma'),
  ('Mohammed First University', 'جامعة محمد الأول', 'Oujda', 'http://www.ump.ma');

INSERT INTO academic_years (year, start_date, end_date, is_current) VALUES
  ('2023-2024', '2023-09-01', '2024-06-30', true),
  ('2024-2025', '2024-09-01', '2025-06-30', false);

INSERT INTO semesters (academic_year_id, name, start_date, end_date)
SELECT 
  id as academic_year_id,
  'Fall Semester' as name,
  start_date,
  start_date + interval '4 months' as end_date
FROM academic_years
UNION ALL
SELECT 
  id as academic_year_id,
  'Spring Semester' as name,
  start_date + interval '6 months' as start_date,
  end_date
FROM academic_years;

-- Insert sample faculties for Mohammed V University
INSERT INTO faculties (university_id, name, name_ar, code)
SELECT 
  u.id,
  f.name,
  f.name_ar,
  f.code
FROM universities u
CROSS JOIN (
  VALUES 
    ('Faculty of Sciences', 'كلية العلوم', 'FS'),
    ('Faculty of Engineering', 'كلية الهندسة', 'ENIM'),
    ('Faculty of Medicine and Pharmacy', 'كلية الطب والصيدلة', 'FMP'),
    ('Faculty of Letters and Human Sciences', 'كلية الآداب والعلوم الإنسانية', 'FLSH')
) as f(name, name_ar, code)
WHERE u.name = 'Mohammed V University';