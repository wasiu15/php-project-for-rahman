CREATE TABLE `department` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `department_name` varchar(80) NOT NULL,
  `faculty_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `department` (`id`, `department_name`, `faculty_id`) VALUES
(1, 'Computer Science', 123),
(2, 'Biochemistry', 123),
(3, 'Mathematics', 123),
(4, 'Chemistry', 123),
(5, 'Physics', 123),
(6, 'Microbiology', 123),

(7, 'English', 234),
(8, 'Religions', 234),
(9, 'Philosophy', 234),

(10, 'Add Education', 345),
(11, 'Add Education', 345),

(12, 'Add Law', 456),
(13, 'Add Law', 456),

(14, 'Add Management', 567), 
(15, 'Add Management', 567)