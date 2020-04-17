CREATE TABLE IF NOT EXISTS `mydb`.`Country` (
  `idCountry` INT NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`idCountry`))
ENGINE = InnoDB


CREATE TABLE IF NOT EXISTS `mydb`.`Skills` (
  `idSkills` INT NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`idSkills`))
ENGINE = InnoDB


CREATE TABLE IF NOT EXISTS `mydb`.`Languages` (
  `idLanguages` INT NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`idLanguages`))
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`Person` (
  `idPerson` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `adress` VARCHAR(255) NULL,
  `email` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `gender` CHAR(1) NULL,
  `dateBirth` DATE NULL,
  `password` VARCHAR(45) NULL,
  `Country_idCountry` INT NOT NULL,
  `Languages_idLanguages` INT NOT NULL,
  `Skills_idSkills` INT NOT NULL,
  PRIMARY KEY (`idPerson`),
  INDEX `fk_Person_Country_idx` (`Country_idCountry` ASC) VISIBLE,
  INDEX `fk_Person_Languages1_idx` (`Languages_idLanguages` ASC) VISIBLE,
  INDEX `fk_Person_Skills1_idx` (`Skills_idSkills` ASC) VISIBLE,
  CONSTRAINT `fk_Person_Country`
    FOREIGN KEY (`Country_idCountry`)
    REFERENCES `mydb`.`Country` (`idCountry`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Person_Languages1`
    FOREIGN KEY (`Languages_idLanguages`)
    REFERENCES `mydb`.`Languages` (`idLanguages`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Person_Skills1`
    FOREIGN KEY (`Skills_idSkills`)
    REFERENCES `mydb`.`Skills` (`idSkills`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

