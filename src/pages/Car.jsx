import { useParams } from "react-router-dom";


export default function Car() {
    const { id } = useParams()

    return (
      <div>
        This is Car with and id of {id}
      </div>
    );
  }