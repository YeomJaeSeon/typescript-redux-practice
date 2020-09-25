typescript react에서 redux사용하기

- ducks pattern으로 redux 구조를 짬
1. 액션타입, 액션생성함수, 리듀서함수를 한파일에 작성
2. 리듀서함수는 export default로 내보냄
3. 액션생성함수는 export 로 내보냄
4. 액션타입의 이름은 파일이름/액션이름으로

type ActionType =
  | ReturnType<typeof increaseAction>
  | ReturnType<typeof decreaseAction>
  | ReturnType<typeof increaseByAction>;
  
  액션생성함수의 ReturnType으로 ActionType Type Alias를 지정
  이는 해당 리듀서함수의 액션의 타입을 지정하기 위함.
  
  이를 위해서 const assertion으로 액션타입 지정해야함
  
  // Actions
const INCREASE = "count/INCREASE" as const;
const DECREASE = "count/DECREASE" as const;
const INCREASEBY = "count/INCREASEBY" as const;

const assertion을 사용하는 이유는 Action의 타입을 가지고있는 ActionType이 명확한 타입명을 가져아하기 때문.
cosnt assertion을 사용하지않으면 ReturnType<typeof increaseAction>은 'count/INCREASE'값을 가지는게아닌 string을 가짐. -> 이는 리덕스에서 타입스크립트를 사용할때 적절치 못함
  
 
rootReducer를 가지고있는 index.ts에서는 rootReducer의 타입을 export해준다. 이유는
해당 스토어를 구독하고있는 컴포넌트가 useSelector(redux hook)을 통해 state를 받아올 때 rootReducer의 Type을 지정하기 위함
ex) export type RootReducerType = ReturnType<typeof rootReducer>; 로 rootReducer의 타입을 export하고
  스토어의 state를 사용하는 컴포넌트에서는
  const count = useSelector(
    (state: RootReducerType) => state.countReducer.count);
  이런식으로 RootReducerType을 지정해준다.
  그러면 뒤의 코드 state.countReducer.count가 자동완성이 될수있음!.
  => 타입을 지정해서 자동완성으로 안전성, 편의성 두가지 토끼를 모두잡을수있다.
