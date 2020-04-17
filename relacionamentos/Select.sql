select * from person p
	join country c
		on p.Country_idCountry = c.idCountry
	join Languages l
		on l.idLanguages = p.Languages_idLanguages
	join Skills s
		on s.idSkills = p.Skill_idSkills;