-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 07:00 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookorder`
--

CREATE TABLE `bookorder` (
  `id` int(100) NOT NULL,
  `bookid` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookorder`
--

INSERT INTO `bookorder` (`id`, `bookid`, `title`, `price`, `email`) VALUES
(1, 1, '1st title', 'BDT 100', 'maruf@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `cregistration`
--

CREATE TABLE `cregistration` (
  `id` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `type` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cregistration`
--

INSERT INTO `cregistration` (`id`, `email`, `password`, `type`) VALUES
(3, 'maruf@gmail.com', 'maruf', 1),
(5, 'hemel@gmail.com', 'hemel', 2),
(6, 'maisha@gmail.com', 'maisha', 1),
(7, 'peal@gmail.com', 'peal', 2);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `Category` varchar(100) NOT NULL,
  `aurthor` varchar(100) NOT NULL,
  `adminid` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `photo`, `price`, `description`, `Category`, `aurthor`, `adminid`) VALUES
(1, '1st title', 'assets/images/upload/book1.png', 'BDT 100', 'niceee booookkk', 'test', 'nice picture', 5),
(4, '1st book', 'assets/images/upload/yellow-black-annual-report-book-cover-template_1201-472.jpg', 'BDT 500', 'nocee boook', 'hemel', 'this is a nice book', 5),
(5, '3rd title', 'assets/images/upload/download.jpg', 'BDT 500', 'verryyy goood boook', 'raihan', 'nice picture nice book', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookorder`
--
ALTER TABLE `bookorder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cregistration`
--
ALTER TABLE `cregistration`
  ADD PRIMARY KEY (`id`,`email`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookorder`
--
ALTER TABLE `bookorder`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cregistration`
--
ALTER TABLE `cregistration`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
