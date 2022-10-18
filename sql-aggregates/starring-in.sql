select "genres"."name" as "genre",
        count(*) as "amount"
        from "genres"
        join "filmGenre" using ("genreId")
        join "castMembers" using ("filmId")
        join "actors" using ("actorId")
        where "firstName" = 'Lisa'
        and "lastName" = 'Monroe'
        group by "genreId";
