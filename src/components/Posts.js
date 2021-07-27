import IndividualPost from "./IndividualPost";

function Posts(props) {
  return props.data.map((item, index) => {
    return <IndividualPost key={index} item={item}></IndividualPost>;
  });
}

export default Posts;
