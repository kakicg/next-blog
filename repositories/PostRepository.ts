import Repository from "./Repository";
import { WpGraphQlPostConst } from "../constants/WpGraphQlConst";

class PostRepository {
    static getList() {
        return Repository(WpGraphQlPostConst.list).getWp()
    }
}

export default PostRepository