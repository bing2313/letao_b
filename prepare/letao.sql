/*
Navicat MySQL Data Transfer

Source Server         : heima
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : letao

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-12-24 18:59:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `addressDetail` varchar(200) DEFAULT NULL,
  `isDelete` int(4) DEFAULT NULL,
  `recipients` varchar(100) DEFAULT NULL,
  `postCode` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES ('1', '1', '山西省太原市小店区', '解放东路传智播客科技集团14层1402室', '1', '周双大', '111112', null);
INSERT INTO `address` VALUES ('15', '1', '河南省周口市罗山县', '川汇区', '0', '小乔', '10098', null);
INSERT INTO `address` VALUES ('16', '1', '北京市北京市东城区', '黑马', '0', '安琪拉123', '10000022222', null);
INSERT INTO `address` VALUES ('17', '1', '天津市天津市和平区', '黑马', '0', '明世隐', '200000', null);
INSERT INTO `address` VALUES ('18', '1', '四川省广元市剑阁县', '黑马', '1', '小乔（周瑜）', '123456', null);

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brandName` varchar(50) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `brandLogo` varchar(200) DEFAULT NULL,
  `isDelete` int(4) DEFAULT NULL,
  `hot` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('1', '耐克', '1', '/mobile/images/brand1.png', '1', '1');
INSERT INTO `brand` VALUES ('2', '阿迪', '1', '/mobile/images/brand2.png', '1', '1');
INSERT INTO `brand` VALUES ('3', '新百伦', '1', '/mobile/images/brand3.png', '1', '1');
INSERT INTO `brand` VALUES ('4', '哥伦比亚', '1', '/mobile/images/brand4.png', '1', '0');
INSERT INTO `brand` VALUES ('5', '匡威', '1', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('6', '阿萨德1', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('7', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('8', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('9', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('10', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('11', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('12', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('13', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('14', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('15', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('16', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('17', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('18', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('19', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('20', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('21', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('22', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('23', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('24', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('25', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('26', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('27', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('28', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('29', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('30', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('31', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('32', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('33', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('34', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('35', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('36', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('37', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('38', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('39', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('40', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('41', '阿萨德2', '2', '/mobile/images/brand5.png', '1', '1');
INSERT INTO `brand` VALUES ('42', '李宁', '22', '/upload/brand/567fe100-fdfb-11e8-afa3-6369ab7b20e6.jpg', '1', '0');
INSERT INTO `brand` VALUES ('43', '番外', '23', '/upload/brand/6f2e15f0-fdfb-11e8-afa3-6369ab7b20e6.jpg', '1', '0');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `num` int(20) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  `isDelete` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('1', '1', '1', '1', '50', '1');
INSERT INTO `cart` VALUES ('2', '1', '2', '2', '45', '1');
INSERT INTO `cart` VALUES ('3', '1', '3', '4', '40', '1');
INSERT INTO `cart` VALUES ('4', '1', '0', '1', '52', '1');
INSERT INTO `cart` VALUES ('5', '1', '0', '4', '37', '1');
INSERT INTO `cart` VALUES ('6', '1', '0', '4', '37', '1');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(50) DEFAULT NULL,
  `isDelete` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '运动馆', '1');
INSERT INTO `category` VALUES ('2', '女士馆', '1');
INSERT INTO `category` VALUES ('3', '男士馆', '1');
INSERT INTO `category` VALUES ('4', '帆布馆', '1');
INSERT INTO `category` VALUES ('5', '户外管', '1');
INSERT INTO `category` VALUES ('6', '户外管', '1');
INSERT INTO `category` VALUES ('7', '户外管', '1');
INSERT INTO `category` VALUES ('8', '户外管', '1');
INSERT INTO `category` VALUES ('9', '户外管', '1');
INSERT INTO `category` VALUES ('10', '户外管', '1');
INSERT INTO `category` VALUES ('11', '户外管', '1');
INSERT INTO `category` VALUES ('12', '户外管', '1');
INSERT INTO `category` VALUES ('13', '户外管', '1');
INSERT INTO `category` VALUES ('14', '户外管', '1');
INSERT INTO `category` VALUES ('15', '户外管', '1');
INSERT INTO `category` VALUES ('16', '户外管', '1');
INSERT INTO `category` VALUES ('17', '户外管', '1');
INSERT INTO `category` VALUES ('18', '户外管', '1');
INSERT INTO `category` VALUES ('19', '户外管', '1');
INSERT INTO `category` VALUES ('20', '户外管', '1');
INSERT INTO `category` VALUES ('21', '    ', '1');
INSERT INTO `category` VALUES ('22', '运动风', '1');
INSERT INTO `category` VALUES ('23', '小清新', '1');
INSERT INTO `category` VALUES ('24', '抖音范', '1');

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `mobile` char(11) DEFAULT NULL,
  `authority` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES ('1', 'root', '4QrcOUm6Wau+VuBX8g+IPg==', '13902060052', '1');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proName` varchar(200) DEFAULT NULL COMMENT '商品名称',
  `oldPrice` float DEFAULT NULL COMMENT '商品价格',
  `price` float DEFAULT NULL COMMENT '商品折扣价',
  `proDesc` varchar(500) DEFAULT NULL COMMENT '商品描述',
  `size` varchar(20) DEFAULT NULL COMMENT '商品尺寸',
  `statu` int(4) DEFAULT NULL COMMENT '是否下架',
  `updateTime` datetime DEFAULT NULL COMMENT '上下架时间',
  `num` int(20) DEFAULT NULL COMMENT '商品库存',
  `brandId` int(11) DEFAULT NULL COMMENT '归属品牌',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮', '888.1', '499.1', '描述', '40-50', '1', '2017-01-05 00:28:29', '20', '1');
INSERT INTO `product` VALUES ('2', '李宁闪击篮球鞋驭帅10镭射队尚4男韦德之道空袭中高帮队尚3.5球鞋', '888.1', '499.1', '描述', '35-45', '1', '2017-01-05 00:28:29', '20', '1');
INSERT INTO `product` VALUES ('3', 'Sport飓风 Nike Kwazi 休闲运动鞋男 844839-002-001-100-400', '888.1', '499.1', '描述', '30-50', '1', '2017-01-05 00:28:29', '20', '1');
INSERT INTO `product` VALUES ('4', '指南针运动 NIKE HYPERSHIFT篮球鞋 844392-010-607-164-017现货', '888.1', '499.1', '描述', '40-55', '1', '2017-01-05 00:28:29', '20', '1');
INSERT INTO `product` VALUES ('5', '【莹恋】MIZUNO美津浓V1GA159002乒乓球鞋男鞋女鞋室内综合训练鞋', '8868.1', '4969.1', '描述123123', '40-50', '1', '2017-01-05 00:48:05', '22', '2');
INSERT INTO `product` VALUES ('6', '【莹恋】MIZUNO美津浓V1GA159002乒乓球鞋男鞋女鞋室内综合训练鞋', '342', '112', '描述123123', '35-56', '1', '2017-01-05 00:48:05', '44', '2');
INSERT INTO `product` VALUES ('7', '鞋子', '390', '180', '220', '35-40', '1', '2018-12-12 19:30:26', '20', '42');
INSERT INTO `product` VALUES ('8', '裙子', '569', '269', '夏装', 'L-XXXL', '1', '2018-12-12 19:31:56', '400', '40');
INSERT INTO `product` VALUES ('9', '11', '111', '11', '11', '11-22', '1', '2018-12-14 19:08:16', '11', '43');
INSERT INTO `product` VALUES ('10', '123', '123', '123', '123', '123', '1', '2018-12-14 19:10:50', '123', '43');

-- ----------------------------
-- Table structure for product_picture
-- ----------------------------
DROP TABLE IF EXISTS `product_picture`;
CREATE TABLE `product_picture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `picName` varchar(40) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `picAddr` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_picture
-- ----------------------------
INSERT INTO `product_picture` VALUES ('1', 'product.jpg', '1', '/mobile/images/product.jpg');
INSERT INTO `product_picture` VALUES ('2', 'detail.jpg', '2', '/mobile/images/detail.jpg');
INSERT INTO `product_picture` VALUES ('3', 'detail.jpg', '3', '/mobile/images/detail.jpg');
INSERT INTO `product_picture` VALUES ('4', '/mobile/images/detail.jpg', '4', '/mobile/images/detail.jpg');
INSERT INTO `product_picture` VALUES ('5', '/mobile/images/detail.jpg', '5', '/mobile/images/detail.jpg');
INSERT INTO `product_picture` VALUES ('6', '/mobile/images/detail.jpg', '6', '/mobile/images/detail.jpg');
INSERT INTO `product_picture` VALUES ('7', '/mobile/images/detail.jpg', '1', '/mobile/images/detail.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `mobile` char(11) DEFAULT NULL,
  `isDelete` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'itcast', 'lueSGJZetyySpUndWjMBEg==', '15102324243', '1');
INSERT INTO `user` VALUES ('2', 'bingbing', '111111', '12222222222', '1');
