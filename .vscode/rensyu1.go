package main

import (
	"fmt"
	"math"
	"math/rand"
)

func add(x, y int) int {
	return x + y
}

func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	fmt.Println("My favorite number is", rand.Intn(10))

	fmt.Printf("Now you have %g problems.", math.Sqrt(7))
	fmt.Println(math.Pi)

	fmt.Println(add(12, 32))

	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
