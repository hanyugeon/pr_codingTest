// 01

/*
# 문제 설명
계좌에 들어있는 돈 일부를 은행에서 출금하고자 합니다.
돈 담을 지갑이 최대한 가볍도록 큰 금액의 화폐 위주로 받습니다.
돈의 액수 monet가 매개변수로 주어질 때, 오만원 권, 만원 권, 오천원 권, 천원 권,
 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전
각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아 return 하도록 solution 매서드를 완성해주세요.

# 제한 사항
money는 1 이상 1,000,000 이하인 자연수 입니다.

# 입출력 예
money  result
50237  [1, 0, 0, 0, 0, 2, 0, 3, 7]
15000  [0, 1, 1, 0, 0, 0, 0, 0, 0]

# 입출력 예 설명
입출력 예 #1
50,237원은 5만 원권 1매, 100원 짜리 동전 2개, 10원짜리 동전 3개, 1원짜리 동전 7개

입출력 예 #2
15,500원은 1만 원권 1매, 5천 원권 1매
*/

// 나의 풀이
function solution(money) {
  let left = money;
  let answer = [];
  const bill = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  for (let i = 0; i < bill.length; i++) {
    let num = 0;
    while (bill[i] <= left) {
      left -= bill[i];
      num++;
    }
    answer.push(num);
  }

  return answer;
}


const q1 = solution(50237);
const q2 = solution(15000);
const q3 = solution(99999);
console.log(q1);
console.log(q2);
console.log(q3);