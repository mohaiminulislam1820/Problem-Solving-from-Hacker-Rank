/* 
n=tower numbers
m=tower height 
player1 moves first 
in each turn, a player can choose a tower of height x and reduce its height to y where 1<=y<x and y evenly divides x
1<=t<=100
1<=n,m<=10**6
players choose optimally how many height to reduce in each turn to win, p2 has to match p1s move
if a player is unable to make a move they lose the game 
return 1 if p1 wins,2 if p2 wins

if n is even p2 wins else p1 wins
the reason is p1 always starts and choses the optimal move, p2 copies p1 
p1 will cut the optimal height always and when there's 2 height remaining p1 will cut 1, now p2 has to cut from another tower but if n is odd number there will only be a odd number of tower with 1 remaining height when p1 cuts first hence p1 is always winning odd tower games, while p2 is winning even tower games
*/

function towerBreakers(n, m) {
    // Write your code here

    if(m == 1){
        return 2;
    }
    return n % 2 == 0 ? 2 : 1;

}
console.log(towerBreakers(1,4));