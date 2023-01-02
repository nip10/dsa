# Write your MySQL query statement below
select u.name as name, sum(t.amount) as balance
from transactions t
join users u on t.account = u.account
group by u.account
HAVING SUM(t.amount)>10000

