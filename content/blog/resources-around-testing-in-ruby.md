---
path: ruby-tests
date: 2021-03-18T19:04:11.899Z
title: Resources around testing in Ruby
description: Minitest, Mocks, Procs and Lambdas
---
[Mocking ](https://blog.carbonfive.com/better-mocking-in-ruby/)on Ruby

[Mocking again](https://semaphoreci.com/community/tutorials/mocking-in-ruby-with-minitest)

[](https://blog.carbonfive.com/better-mocking-in-ruby/)

[Good read on procs vs lambdas](https://blog.awaxman.com/what-is-the-difference-between-a-block-a-proc-and-a-lambda-in-ruby)



###  Summary Differences

1. Procs are objects, blocks are not
2. At most one block can appear in an argument list
3. Lambdas check the number of arguments, while procs do not
4. Lambdas and procs treat the ‘return’ keyword differently



[Basics on error exceptions hierarchy]([](https://blog.awaxman.com/what-is-the-difference-between-a-block-a-proc-and-a-lambda-in-ruby)https://www.honeybadger.io/blog/understanding-the-ruby-exception-hierarchy/)