## useHistory
*historycác đối tượng thường có các thuộc tính và phương thức sau:
length- (số) Số mục nhập trong ngăn xếp lịch sử
action- (chuỗi) Hành động hiện tại ( PUSH, REPLACEhoặc POP)
location- (đối tượng) Vị trí hiện tại. Có thể có các thuộc tính sau:
pathname- (chuỗi) Đường dẫn của URL
search- (chuỗi) Chuỗi truy vấn URL
hash- (chuỗi) Đoạn mã băm URL
state- (đối tượng) trạng thái vị trí cụ thể được cung cấp cho ví dụ: push(path, state)khi vị trí này được đẩy lên ngăn xếp. Chỉ khả dụng trong lịch sử trình duyệt và bộ nhớ.
push(path, [state])- (chức năng) Đẩy một mục mới vào ngăn xếp lịch sử
replace(path, [state])- (chức năng) Thay thế mục nhập hiện tại trên ngăn xếp lịch sử
go(n)- (chức năng) Di chuyển con trỏ trong ngăn xếp lịch sử theo ncác mục nhập
goBack()- (chức năng) Tương đương vớigo(-1)
goForward()- (chức năng) Tương đương vớigo(1)
block(prompt)- (chức năng) Ngăn điều hướng*
```
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```
