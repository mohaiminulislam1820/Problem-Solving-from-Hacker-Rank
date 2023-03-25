function distinctiveCountToClimbStaircase(n) {
    if (n<=2)
        return n;

    return distinctiveCountToClimbStaircase(n-1)+distinctiveCountToClimbStaircase(n-2);
}

console.log(distinctiveCountToClimbStaircase(4));