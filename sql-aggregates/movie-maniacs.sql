select "customers"."firstName",
        "customers"."lastName",
        sum("amount") as "Total amount"
        from "customers"
        join "payments" using ("customerId")
        group by "customers"."firstName", "customers"."lastName"
        order by "Total amount" desc;
