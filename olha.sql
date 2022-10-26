/*
SQLyog Enterprise - MySQL GUI v6.5
MySQL - 5.0.67-community : Database - escalacao
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

create database if not exists `escalacao`;

USE `escalacao`;

/*Table structure for table `jogadores` */

DROP TABLE IF EXISTS `jogadores`;

CREATE TABLE `jogadores` (
  `cod_jogador` int(11) unsigned NOT NULL auto_increment,
  `ape_jogador` varchar(50) NOT NULL,
  `qtd_jogador` int(11) unsigned default NULL,
  `clu_jogador` varchar(100) NOT NULL,
  `cod_posicao` int(11) NOT NULL,
  PRIMARY KEY  (`cod_jogador`)
) ENGINE=MyISAM AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;

/*Data for the table `jogadores` */

insert  into `jogadores`(`cod_jogador`,`ape_jogador`,`qtd_jogador`,`clu_jogador`,`cod_posicao`) values (1,'Júlio César',22,'Internazionale/ITA',1),(2,'Doni',14,'Roma/ITA',1),(3,'Hélton',5,'Porto/POR',1),(4,'Gomes',5,'Tottenham/ING',1),(5,'Diego Alves',3,'Almería/ESP',1),(6,'Fábio Aurélio',1,'Liverpool/ING',3),(7,'Renan',2,'Xerez/ESP',1),(8,'Cássio',1,'Sparta/HOL',1),(9,'Lúcio',25,'Internazionale/ITA',2),(10,'Juan',23,'Roma/ITA',2),(11,'Alex',17,'Chelsea/ING',2),(12,'Luisão',20,'Benfica/POR',2),(13,'Alex Silva',8,'São Paulo/BRA',2),(14,'Naldo',9,'Werder Bremen/ALE',2),(15,'Thiago Silva',8,'Milan/ITA',2),(16,'Miranda',6,'São Paulo/BRA',2),(17,'Edu Dracena',2,'Santos/BRA',2),(18,'Henrique',2,'Racing Santander/ESP',2),(19,'Gladstone',2,'Portuguesa/BRA',2),(20,'Breno',1,'Nuremberg/ALE',2),(21,'Léo',1,'Palmeiras/BRA',2),(22,'Gilberto',13,'Cruzeiro/BRA',3),(23,'Kléber',12,'Internacional/BRA',3),(24,'Marcelo',10,'Real Madrid/ESP',3),(25,'Adriano',4,'Sevilla/ESP',3),(26,'Juan',2,'Flamengo/BRA',3),(27,'Richarlyson',1,'São Paulo/BRA',3),(28,'Carlinhos',1,'Santo André/BRA',3),(29,'Maicon',25,'Internazionale/ITA',4),(30,'Daniel Alves',21,'Barcelona/ESP',4),(31,'Rafinha',3,'Schalke 04/ALE',4),(32,'Cicinho',2,'São Paulo/BRA',4),(33,'Ilsinho',1,'Shakhtar/UCR',4),(34,'Leonardo Moura',1,'Flamengo/BRA',4),(35,'Gilberto Silva',25,'Panathinaikos/GRE',5),(36,'Josué',22,'Wolfsburg/ALE',5),(37,'Mineiro',10,'Schalke 04/ALE',5),(38,'Dudu Cearense',6,'Olympiakos/GRE',5),(39,'Edmílson',6,'Real Zaragoza/ESP',5),(40,'Lucas',9,'Liverpool/ING',5),(41,'Fernando',6,'Bordeuax/FRA',5),(42,'Hernanes',4,'São Paulo/BRA',5),(43,'Felipe Melo',7,'Juventus/ITA',5),(44,'Tinga',2,'Borussia Dortmund/ALE',5),(45,'Denílson',1,'Arsenal/ING',5),(46,'Jonatas',1,'Botafogo/BRA',5),(47,'Elano',25,'Galatasaray/TUR',6),(48,'Kaká',24,'Real Madrid/ESP',6),(49,'Diego',15,'Juventus/ITA',6),(50,'Júlio Baptista',20,'Roma/ITA',6),(51,'Ronaldinho Gaúcho',13,'Milan-ITA',6),(52,'Anderson',11,'Manchester United/ING',6),(53,'Mancini',2,'Milan/ITA',6),(54,'Alex',5,'Spartak Moscou/RUS',6),(55,'Thiago Neves',2,'Al-Hilal/ARA',6),(56,'Morais',1,'Corinthians/BRA',6),(57,'Wagner',1,'Lokomotiv Moscou/RUS',6),(58,'Robinho',26,'Santos/BRA',7),(59,'Vágner Love',10,'Flamengo/BRA',7),(60,'Luís Fabiano',15,'Sevilla/ESP',7),(61,'Rafael Sóbis',10,'Al-Jazira/EAU',7),(62,'Alexandre Pato',9,'Milan/ITA',7),(63,'Adriano',10,'Flamengo/BRA',7),(64,'Afonso Alves',5,'Al-Sadd/QAT',7),(65,'Fred',6,'Fluminense/BRA',7),(66,'Daniel Carvalho',4,'Al-Arabi/QAT',7),(67,'Jô',3,'Galatasaray/TUR',7),(68,'Ricardo Oliveira',2,'Al-Jazira/EAU',7),(69,'Nilmar',7,'Villarreal/ESP',7),(70,'Bobô',1,'Besiktas/TUR',7),(71,'Victor',3,'Grêmio/BRA',1),(72,'Cris',1,'Lyon/FRA',2),(73,'André Santos',4,'Fenerbahçe/TUR',3),(74,'Michel Bastos ',3,'Lyon/FRA',3),(75,'Filipe Luís',2,'Deportivo La Coruña/ESP',3),(81,'Fábio',2,'Cruzeiro/BRA',1),(77,'Kléberson',2,'Flamengo/BRA',5),(78,'Sandro',1,'Internacional/BRA',5),(79,'Ramires',6,'Benfica/POR',6),(80,'Carlos Eduardo',2,'Hoffenheim/ALE',6),(82,'Fábio Simplício',1,'Palermo/ITA',6),(83,'Diego Souza',1,'Palmeiras/BRA',6),(84,'Diego Tardelli',2,'Atlético-MG/BRA',7),(85,'Huck',1,'Porto/POR',7),(76,'Grafite',1,'Wolfsburg/ALE',7);

/*Table structure for table `posicoes` */

DROP TABLE IF EXISTS `posicoes`;

CREATE TABLE `posicoes` (
  `cod_posicao` int(11) unsigned NOT NULL auto_increment,
  `nom_posicao` varchar(20) NOT NULL,
  PRIMARY KEY  (`cod_posicao`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `posicoes` */

insert  into `posicoes`(`cod_posicao`,`nom_posicao`) values (1,'Goleiro'),(2,'Zagueiro'),(3,'Lateral Esquerdo'),(4,'Lateral Direito'),(5,'Volante'),(6,'Meia'),(7,'Atacante');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
