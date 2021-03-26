# Non-atomic Test Case Implementation

It's not worth writing test case for client side validation in end-to-end test in the first place because you can do it easily and much faster in [unit test or integration test](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests). But, sometimes we have to do it.

This is a PoC on how to play around exception handling in Cypress to "gather" all exceptions and then present gathered error messages in a single exception.

There are three types of DOM state for error label element:

1. Error label element is ready when document is initially loaded
2. Error label is initially hidden and then will have its hidden attribute toggled after triggering an event
3. Error label element spawns after triggering an event

In this PoC, it is proven to be possible to handle those scenarios.

For the first and second type, just use element visibility check.

For the third type, use the combination of element existence and visibility check.
