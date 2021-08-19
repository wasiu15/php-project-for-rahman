CREATE TABLE `faculty` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `faculty_name` varchar(100) NOT NULL,
  `faculty_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `faculty` (`id`, `faculty_name`, `faculty_id`) VALUES
(1, 'Science', 123),
(2, 'Art', 234),
(3, 'Education', 345),
(4, 'Law', 456),
(5, 'Management', 567)