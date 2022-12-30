/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie;

// 영화 볼거니?
let goingToWatchMovie;

// if 문(statement)
didWatchMovie = prompt("영화 봤니?");
if (didWatchMovie.includes('yes')) {
  console.log("그 영화 꿀잼~~");
} else {
  goingToWatchMovie = prompt("그 영화 볼거야?");

  if(goingToWatchMovie.includes("yes")) {
    console.log("같이볼까?");
  } else {
    console.log("으응 ;;");
  }
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식