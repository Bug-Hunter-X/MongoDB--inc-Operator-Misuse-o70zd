# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries. The bug involves attempting to increment a non-numeric field, resulting in an error or unexpected behavior.

## Bug Description
The provided code attempts to increment a field using the `$inc` operator that does not exist or is not numeric, which can cause unpredictable results. 

## Solution
The solution includes verifying that the field exists and is a number before attempting to increment it. The corrected code utilizes proper error handling.