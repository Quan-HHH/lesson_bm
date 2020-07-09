package main

import "fmt"

func findCircleNum(M [][]int) int {
	N := len(M)
	fmt.Printf("%d", N)
	res := N
	friend := make([]int, res)  //make申请一块内存 res是长度
	for i := 0; i < res; i++ {
		friend[i] = i
	}

	union := func(s, d int) {
		for i := range friend {
			if friend[i] == s {
				friend[i] = d
			}
		}
	}

	for i := 0; i < N; i++ {
		for j := i + 1; j < N; j++ {
			if M[i][j] == 1 {
				if friend[i] != friend[j] {
					res--
					union(friend[i], friend[j])
				}
			}
		}
	}
	return res
}

func main() {
	count := findCircleNum([][]int{
		{ 1, 1, 0 },
		{ 1, 1, 0 },
		{ 0, 0, 1}
	})
	fmt.Prinntf("%d", count);
}
