-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2021 at 12:47 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bot`
--

-- --------------------------------------------------------

--
-- Table structure for table `bacot`
--

CREATE TABLE `bacot` (
  `id` int(11) NOT NULL,
  `kata` text CHARACTER SET utf8mb4 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `badword`
--

CREATE TABLE `badword` (
  `id` int(11) NOT NULL,
  `kata` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fitur`
--

CREATE TABLE `fitur` (
  `id` int(11) NOT NULL,
  `groupid` varchar(255) NOT NULL,
  `command` varchar(255) NOT NULL,
  `ket` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fitur`
--

INSERT INTO `fitur` (`id`, `groupid`, `command`, `ket`) VALUES
(2, '19295292913-1605343430@g.us', '/tagall', 'disable'),
(5, '6289518515091-1620700645@g.us', '/asupan', 'disable'),
(6, '6289518515091-1600001209@g.us', '/asupan', 'disable'),
(9, '6283142933894-1611879057@g.us', '/kick', 'disable'),
(10, '6283142933894-1611879057@g.us', '/tagall', 'disable'),
(12, '6283142933894-1595860891@g.us', '/findsticker', 'disable'),
(17, '13177638296-1618983016@g.us', '/link', 'disable'),
(18, '6289518515091-1620700645@g.us', '/kick', 'disable'),
(19, '6289518515091-1620700645@g.us', '/getxvideos', 'disable'),
(20, '6289518515091-1620700645@g.us', '/menu16', 'disable'),
(21, '6289518515091-1620700645@g.us', '/cersex', 'disable'),
(22, '6289518515091-1620700645@g.us', '/smule', 'disable'),
(23, '6289518515091-1600001209@g.us', '/menu16', 'disable'),
(24, '628819487719-1620321233@g.us', '/menu16', 'disable'),
(25, '628819487719-1620321233@g.us', '/menu15', 'disable'),
(26, '6282341184686-1570453795@g.us', '/hehe', 'disable'),
(27, '6282341184686-1570453795@g.us', '/xxx', 'disable'),
(28, '6282341184686-1570453795@g.us', '/xvideos', 'disable'),
(29, '6282341184686-1570453795@g.us', '/cersex', 'disable'),
(30, '6289518515091-1600001209@g.us', '/cersex', 'disable'),
(31, '6289518515091-1600001209@g.us', '/menu15', 'disable'),
(32, '6289518515091-1600001209@g.us', '/menu16', 'disable'),
(33, '6289518515091-1600001209@g.us', '/smule', 'disable'),
(34, '6289518515091-1600001209@g.us', '/kpop', 'disable'),
(35, '6289518515091-1600001209@g.us', '/smulestalk', 'disable'),
(36, '6289518515091-1600001209@g.us', '/add', 'disable'),
(38, '6289518515091-1600001209@g.us', '/tagall', 'disable');

-- --------------------------------------------------------

--
-- Table structure for table `gc_badword`
--

CREATE TABLE `gc_badword` (
  `id` int(11) NOT NULL,
  `groupid` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gc_rules`
--

CREATE TABLE `gc_rules` (
  `id` int(11) NOT NULL,
  `groupid` varchar(255) NOT NULL,
  `rules` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gc_rules`
--

INSERT INTO `gc_rules` (`id`, `groupid`, `rules`) VALUES
(1, '13177638296-1618983016@g.us', '*WELCOME%20TO%20PRILLAST%20GROUP*%0A%20_fyi%3A_%0A_-%20Bot%20menggunakan%20perfix%20(%2F)_%0A_-%20gosah%20spam%2C%20call%2C%20sama%20vc%20bot%20ya%20jingan_%0A%0A_Rules%3A_%0A-%20gosah%20baperan%20jadi%20orng%0A-%20pap%20dlu%20kata%20ritha%0A-%20gosah%20join%20kalau%20cuma%20jadi%20sider%0A-%20minimum%20usia%2014%2B%0A-%20spam%20stiker%20dapet%20peringatan%20atau%20warn%201x.%20Jika%20sudah%20mendapatkan%203x%20peringatan%20langsung%20kami%20kick%0A-%20link%20gc%20(gc%20lain%20ataupun%20gc%20ini)%2C%20virtex%2C%20rasis%2C%20porno%2C%20dan%20gore%20auto%20kick%0A-minta%20link%20gc%3F%20Ketik%20%2Flink%0A*-hanya%20admin%20yang%20boleh%20ngelanggar%20rules%20%3E%5C%5C%3C*'),
(2, '6282172282012-1594960288@g.us', 'bebas%2C%20yang%20penting%20lu%20nya%20punya%20otak%2C%20makasih%20sama%20sama'),
(3, '6285879533018-1623043360@g.us', 'SEBELUM%20MEMULAI%20HARAP%20KETIK%20*%2Fverif*%0A%0A%0ASetelah%20itu%20ketik%20*%2Fmenu*%0A%0A_*Dan%20selamat%20ber%20gabut%20gabut%20with%20bot*_'),
(4, '19295292913-1605343430@g.us', 'Wajib%20nonton%20xnxx.com%20biar%20sehat%20%F0%9F%99%82'),
(5, '6289618205745-1615353840@g.us', 'Saat%20lebih%20dari%20satu%20bot%20yang%20masuk%20ke%20dalam%20grup%2C%20maka%20limit%20untuk%20pengguna%20free%20akan%20berkurang%20sesuai%20dengan%20jumlah%20bot%20yang%20berada%20di%20dalam%20grup%20dalam%20satu%20kali%20penggunaan%20command.%0A%0ANonaktifkan%20unduh%20otomatis%20agar%20penyimpanan%20tidak%20penuh%20dengan%20media%20grup%20ini.%20%20%20%0A%0AAturan%20hanya%20mempersempit%20ruang%20gerakmu.%20Dan%20kami%20menghapus%20itu.%0A%0AUntuk%20menggunakan%20bot%20ketik%20%2Fmenu%20untuk%20melihat%20fitur%20lain%20nya.%0A%0ATidak%20ada%20aturan%20bukan%20berarti%20bisa%20sebebasnya%20melakukan%20segala%20hal.%0A%0AADMIN%20BERKUASA');

-- --------------------------------------------------------

--
-- Table structure for table `mode`
--

CREATE TABLE `mode` (
  `id` int(11) NOT NULL,
  `mode` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `msg_welcome`
--

CREATE TABLE `msg_welcome` (
  `id` int(11) NOT NULL,
  `groupid` varchar(255) NOT NULL,
  `msg_add` varchar(255) NOT NULL,
  `msg_kick` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `msg_welcome`
--

INSERT INTO `msg_welcome` (`id`, `groupid`, `msg_add`, `msg_kick`, `status`) VALUES
(1, '13177638296-1618983016@g.us', 'Wellcome%20to%20*PRILLAST*%20group%2C%20silahkan%20ketik%20_%2Frules_%20untuk%20melihat%20rules%20group%2C%20dan%20_%23rules_%20untuk%20melihat%20rules%20bot%2C%20semoga%20betah%F0%9F%A5%B0', '_selamat%20jalan%20kawan%2C%20semoga%20tenang%20di%20alam%20sana%2C%20terimakasih%20pernah%20menjadi%20beban%20group_%F0%9F%98%94', 'on'),
(2, '6285879533018-1623043360@g.us', '%5BSELAMAT%20DATANG%20DI%20*GRUP%20GABUT%20WITH%20BOT*%5D%0A%20%20%20%20%0AHARAP%20KETIK%20%2Frules%20TERLEBIH%20DAHULU%20SEBELUM%20MEMULAI%0A%0AAZEEEK%20MEMBER%20BARUU%0A%20%20%20%20-----%5B%20Iluser%20%5D-----', '_*Selamat%20tinggal%20kawan%20semoga%20tenang%20di%20alam%20sana*_', 'on'),
(3, '6283142933894-1517029769@g.us', '', '', 'on'),
(4, '6283142933894-1595860891@g.us', 'Yahaha%20masuk%20lewat%20tautan', '', 'on'),
(5, '6289519208090-1558335511@g.us', '*SELAMAT%20DATANG%20DI%20GRUP%20GA%20JELAS*', '', 'on'),
(6, '6281255168641-1616381936@g.us', '*SELAMAT%20DATANG%20DI%20GRUP%20GA%20JELAS*', '', 'on'),
(7, '6285730177595-1600168655@g.us', 'Hii%20kak-!!%20%0ASelamat%20datang%20di%20*%F0%9D%90%AD%20%F0%9D%90%A1%20%F0%9D%90%9E%20%F0%9D%96%87%20%F0%9D%96%86%20%F0%9D%96%99%20%F0%9D%96%9A%60%E1%94%86%E0%AB%A7%F0%9F%97%BF*%2C%20Silahkan%20untuk%20memperkenalkan%20diri.', '', 'on'),
(8, '6285730177595-1600168655@g.us', 'Hii%20kak-!!%20%0ASelamat%20datang%20di%20*%F0%9D%90%AD%20%F0%9D%90%A1%20%F0%9D%90%9E%20%F0%9D%96%87%20%F0%9D%96%86%20%F0%9D%96%99%20%F0%9D%96%9A%60%E1%94%86%E0%AB%A7%F0%9F%97%BF*%2C%20Silahkan%20untuk%20memperkenalkan%20diri.', '', 'on'),
(9, '6285730177595-1600168655@g.us', 'Hii%20kak-!!%20%0ASelamat%20datang%20di%20*%F0%9D%90%AD%20%F0%9D%90%A1%20%F0%9D%90%9E%20%F0%9D%96%87%20%F0%9D%96%86%20%F0%9D%96%99%20%F0%9D%96%9A%60%E1%94%86%E0%AB%A7%F0%9F%97%BF*%2C%20Silahkan%20untuk%20memperkenalkan%20diri.', '', 'on'),
(10, '6285730177595-1600168655@g.us', 'Hii%20kak-!!%20%0ASelamat%20datang%20di%20*%F0%9D%90%AD%20%F0%9D%90%A1%20%F0%9D%90%9E%20%F0%9D%96%87%20%F0%9D%96%86%20%F0%9D%96%99%20%F0%9D%96%9A%60%E1%94%86%E0%AB%A7%F0%9F%97%BF*%2C%20Silahkan%20untuk%20memperkenalkan%20diri.', '', 'on'),
(11, '6283142933894-1611879057@g.us', 'Yahaha%20masuk%20lewat%20tautan', '', 'on'),
(12, '6283142933894-1517029769@g.us', '', '', 'on'),
(13, '6281346783098-1620112302@g.us', '', '', 'on'),
(14, '6281346783098-1620112302@g.us', '', '', 'on'),
(15, '19295292913-1605343430@g.us', 'Selamat%20datang%20anggota%20baru.%20Follow%20https%3A%2F%2Finstagram.com%2F_zidanfadilaharsa%20yah', '', 'on'),
(16, '6289618205745-1615353840@g.us', '', '', 'on'),
(17, '919937560868-1604985873@g.us', '', '', 'on'),
(18, '628819487719-1620321233@g.us', '', '', 'on'),
(19, '919937560868-1604985873@g.us', '', '', 'on'),
(20, '6289518515091-1620700645@g.us', 'selamat%20datang%20di%20gc%20ini%20beban%20keluarga%20%3Av%0ASemoga%20Betah%20Dengan%20Keributan%20Disini%20%3A3', 'ya%20yahahahayukkkkk%20anak%20bamperan%20wisuda', 'on'),
(21, '6281574918506-1620436517@g.us', '%5BSELAMAT%20DATANG%20DI%20GRUP%20YANG%20MASIH%20BUTUH%20MEMBER%5D%0A%20%20%20%20%0AHARAP%20KETIK%20%23rules%20TERLEBIH%20DAHULU%20SEBELUM%20MEMULAI%0A%0AAZEEEK%20MEMBER%20BARUU%0A%20%20%20%20-----%5B%20Iluser%20%5D-----', '', 'on'),
(22, '6281574918506-1620436517@g.us', '%5BSELAMAT%20DATANG%20DI%20GRUP%20YANG%20MASIH%20BUTUH%20MEMBER%5D%0A%20%20%20%20%0AHARAP%20KETIK%20%23rules%20TERLEBIH%20DAHULU%20SEBELUM%20MEMULAI%0A%0AAZEEEK%20MEMBER%20BARUU%0A%20%20%20%20-----%5B%20Iluser%20%5D-----', '', 'on'),
(23, '6283847631034-1618207431@g.us', 'Welcome%20Beban%20Grup%20*AYANA%20BOT%20OFFICIAL%20II*%20Jangan%20Lupa%20Baca%20Deskripsi%20Patuhi%20Peraturan%20Ya%20%F0%9F%91%8D%20GA%20BACA%20KATARAK%20AMIN%20%F0%9F%99%8F%F0%9F%98%87', 'GOOD%20BYE%20SAMPAH%20BUSUK%2C%20SEMOGA%20JIWA%20MU%20TENANG%20DI%20ALAM%20KUBUR%20DAN%20CEPET%20DISIKSA', 'on'),
(24, '6281296968824-1607576878@g.us', 'Welcome%20Beban%20Grup%20*AYANA%20BOT%20OFFICIAL*%20Jangan%20Lupa%20Baca%20Deskripsi%20Patuhi%20Peraturan%20Ya%20%F0%9F%91%8DGA%20BACA%20KATARAK%20AMIN', 'GOOD%20BYE%20SAMPAH%20BUSUK%2C%20SEMOGA%20JIWA%20MU%20TENANG%20DI%20ALAM%20KUBUR%20DAN%20CEPET%20DISIKSA%20AMIN%20%F0%9F%99%8F%F0%9F%98%87', 'on'),
(25, '6282229007522-1621490946@g.us', '', '', 'off'),
(26, '6287760332152-1609939260@g.us', '', '', 'off');

-- --------------------------------------------------------

--
-- Table structure for table `obrolan_ica`
--

CREATE TABLE `obrolan_ica` (
  `id` int(11) NOT NULL,
  `laki` varchar(50) NOT NULL,
  `perempuan` varchar(50) NOT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `onoff`
--

CREATE TABLE `onoff` (
  `id` int(11) NOT NULL,
  `groupid` varchar(255) NOT NULL,
  `ket` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_ica`
--

CREATE TABLE `user_ica` (
  `id` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  `umur` varchar(255) NOT NULL,
  `jk` varchar(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `warn`
--

CREATE TABLE `warn` (
  `id` int(11) NOT NULL,
  `groupid` text NOT NULL,
  `member` varchar(255) NOT NULL,
  `jumlah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `warn`
--

INSERT INTO `warn` (`id`, `groupid`, `member`, `jumlah`) VALUES
(2, '19295292913-1605343430@g.us', '6281310253704@c.us', 1),
(5, '6285745103832-1622204315@g.us', '6285864490182@c.us', 1),
(8, '13177638296-1618983016@g.us', '60143687349@c.us', 1),
(9, '13177638296-1618983016@g.us', '6282269019161@c.us', 2),
(11, '13177638296-1618983016@g.us', '6281263667547@c.us', 2),
(12, '13177638296-1618983016@g.us', '6287796478675@c.us', 1),
(15, '13177638296-1618983016@g.us', '6285788868845@c.us', 1),
(16, '13177638296-1618983016@g.us', '6289527250013@c.us', 1),
(17, '6289518515091-1600001209@g.us', '6282171939425@c.us', 2),
(18, '13177638296-1618983016@g.us', '6281802212799@c.us', 1),
(21, '19295292913-1605343430@g.us', '6289655932500@c.us', 1),
(24, '13177638296-1618983016@g.us', '6282324102061@c.us', 2),
(25, '6285730177595-1600168655@g.us', '6285813057296@c.us', 1),
(26, '6285730177595-1600168655@g.us', '6282285021892@c.us', 1),
(30, '13177638296-1618983016@g.us', '62895320521571@c.us', 1),
(31, '6285879533018-1623043360@g.us', '6285877220385@c.us', 1),
(32, '6285879533018-1623043360@g.us', '6285731572764@c.us', 1),
(33, '6289618205745-1615353840@g.us', '62895329420213@c.us', 1),
(34, '6281574918506-1620436517@g.us', '628815887040@c.us', 1),
(35, '13177638296-1618983016@g.us', '6289673760204@c.us', 1),
(36, '18186435779-1609220956@g.us', '393408709674@c.us', 1),
(37, '18186435779-1609220956@g.us', '628975905739@c.us', 1),
(38, '6283142933894-1595860891@g.us', '6289628722750@c.us', 1),
(39, '6285890653018-1603250760@g.us', '6285333406834@c.us', 1),
(43, '6285890653018-1603250760@g.us', '6282125278502@c.us', 1),
(44, '13177638296-1618983016@g.us', '6288290014723@c.us', 1),
(45, '13177638296-1618983016@g.us', '6281397682933@c.us', 2),
(46, '6285890653018-1603250760@g.us', '6282394570300@c.us', 1),
(47, '6281574918506-1620436517@g.us', '6285213529471@c.us', 1);

-- --------------------------------------------------------

--
-- Table structure for table `warn_badword`
--

CREATE TABLE `warn_badword` (
  `id` int(11) NOT NULL,
  `groupid` varchar(255) NOT NULL,
  `member` varchar(255) NOT NULL,
  `jumlah` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bacot`
--
ALTER TABLE `bacot`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `badword`
--
ALTER TABLE `badword`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fitur`
--
ALTER TABLE `fitur`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gc_badword`
--
ALTER TABLE `gc_badword`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gc_rules`
--
ALTER TABLE `gc_rules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mode`
--
ALTER TABLE `mode`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `msg_welcome`
--
ALTER TABLE `msg_welcome`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `obrolan_ica`
--
ALTER TABLE `obrolan_ica`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `onoff`
--
ALTER TABLE `onoff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_ica`
--
ALTER TABLE `user_ica`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `warn`
--
ALTER TABLE `warn`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `warn_badword`
--
ALTER TABLE `warn_badword`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bacot`
--
ALTER TABLE `bacot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `badword`
--
ALTER TABLE `badword`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fitur`
--
ALTER TABLE `fitur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `gc_badword`
--
ALTER TABLE `gc_badword`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gc_rules`
--
ALTER TABLE `gc_rules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `mode`
--
ALTER TABLE `mode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `msg_welcome`
--
ALTER TABLE `msg_welcome`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `obrolan_ica`
--
ALTER TABLE `obrolan_ica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `onoff`
--
ALTER TABLE `onoff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_ica`
--
ALTER TABLE `user_ica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `warn`
--
ALTER TABLE `warn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `warn_badword`
--
ALTER TABLE `warn_badword`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
