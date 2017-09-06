/**
 * 문제 )
 * 
 * def average(list):
 * 함수를 완성해서 매개변수 list의 평균값을 return하도록 만들어 보세요.
 * 어떠한 크기의 list가 와도 평균값을 구할 수 있어야 합니다.
 */

function average(array){
    //함수를 완성하세요
    var arr = array;
    var sum = 0;
    var avg = 0;
    
    for(var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    
    avg = sum/arr.length;
  
    return avg;
  }
  
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  var testArray = [5,3,4] 
  console.log("평균값 : " + average(testArray));
  