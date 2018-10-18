# Building a CLI

> We'are going to build a CLI for admin. All interaction with this program (inputs and outs) will be via the console.

## We want the app to response to a number of requests (inputs)

1. "exit"
2. "man" / "help"
3. "stats"
4. "list users"
5. "more user info --{userId}"
6. "list checks"
7. "list checks --up"
8. "list checks --down"
9. "more check info --{checkId}"
10. "list logs"
11. "more log info --{logId}"

## Steps
> We'll be building this CLI using an event-driven design pattern.