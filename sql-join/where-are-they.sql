select "addresses"."line1" as "street",
        "addresses"."district",
        "cities"."name" as "city",
        "countries"."name" as "country"
        from "addresses"
        join "cities" using ("cityId")
        join "countries" using ("countryId");
