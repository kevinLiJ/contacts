/*
Navicat MySQL Data Transfer

Source Server         : liyang
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : myangular

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-08-25 18:33:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for contacts
-- ----------------------------
DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `isCollected` int(1) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `selfIntroduction` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contacts
-- ----------------------------
INSERT INTO `contacts` VALUES ('董小茹1', '1381356486', '0', 'l546872118@163.com', '北京昌平', '我是一个程序猿，哈哈哈', '1', 'male');
INSERT INTO `contacts` VALUES ('李洋', '3546813', '0', '812875741@qq.com', '新河县苏章村', '我也是一个程序员', '2', 'male');
INSERT INTO `contacts` VALUES ('小茹茹', '7654321', '1', '4515@qq.com', '还闹到', '我是一个小木匠', '3', 'male');
INSERT INTO `contacts` VALUES ('小黄', '234234', '1', '大师傅大师傅', '大厦法定身份a', '你4不4傻', '4', 'male');
