select "countries"."name" as "country",
count(*) as "numberOfCities"
from "cities"
join "countries" using ("countryId")
group by "countryId";
