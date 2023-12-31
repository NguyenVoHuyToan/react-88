# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

----------------------------------------------------------------------------------------------------------------
cách viết một function ngắn gọn trong ES6: - const newFunction = () => {} "Arrow function"
                                            - function course() {} "function component"
kiểu dữ liệu của OBJ là kiểu dữ liệu tham chiếu (referent type)


$ Khái niệm của React: 
Component -> Là thành phần riêng lẽ của một hệ thống hoặc một dự án. Có thể dễ dàng xử lý những thành phần riêng lẽ này một cách độc lập, không làm ảnh hưởng đến các thành phần khác. Một component có thể được dụng nhiều lần trong một dự án...

+ JSX là gì?: - Javascript XML. Tạo ra các đoạn HTML một cách tường mình, nhanh chóng. Có thể chèn các giá trị JS vào bên trong để tạo ra trang web có nội dung.
            - fragment <> </> : bọc các jsx vào 1 parent, bản chất jsx là một Obj, 1 function không thể return 2 Obj.
            - Hiển thị Dinamic content với jsx
            - 
    Rule of JSX: - Không thể return ra 2 Obj
                 

+ Props -> chia làm 2 loại: React Element và React Component
+ React Element: - Sử dụng Props giống như sử dụng Attribute của HTML
               - 2 Props thường sử dụng là class -> className; for -> htmlFor
               - Phải tuân theo quy ước có sẵn

+ React Component: - Sử dụng props giống như đối số cho Function
                 - Tự do đặt tên:
                    - Đặt tên theo camelCase
                    - *Có thể có dấu gạch ngang
+ Chú ý: - Prop "key" là prop đặc biệt: chỉ dùng cho mục đích đưa React Element/ React Component vào trong 1 Array.
       - Props cơ bản là đối số của Component =>> Props có thể là bất cứ kiểu dữ liệu gì
       - Sử dụng Destructuring

+ CallBack: Là khi chúng ta định nghĩa một function, sau đó truyền qua đối số của một function khác, sau đó được gọi lại trong hàm nhận đối số đó, thì sẽ gọi là callback.
    - phải kiểm tra có đúng là function hay ko bằng cách: if(value) === function, sau đó mới dùng callback

+Hooks là gì?
    - Là method, là hàm được cung cấp bởi thư viện ReactJS. mỗi hàm sẽ có mỗi tính năng và trường hợp cụ thể để áp dụng.
    - Các Hooks cơ bản gồm: - useState
                            - useEffect
                            - useLayoutEffect
                            - useRef
                            - useCallback
                            - useMemo
                            - useReducer
                            - useContext
                            - useImperativeHandle
                            - useDebugValue
    - Role:
        - Hook chỉ dùng cho function component
        - Component đơn giản và trở nên dễ hiểu
            - Không bị chia logic ra như methods trong lifecycle của Class Component
            - Không cần sử dụng "this"
        -Sử dụng Hooks khi nào?
            - Dự án mới => Hooks
            - Dự án cũ
                - Component mới => Function Component + Hooks
                - Component cũ =>  Giữ nguyên, có thời gian tối ưu sau
            -Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class component
        - Người mới nên bắt đầu với Function hay Class component? => Function Component
        - Có kết hợp sử dụng Function và Class Component được không? => Được
        
+useState(Trạng thái của dữ liệu):
    - Khi nào dùng useState: 
        * Khi muốn dữ liệu thay đổi, thì giao diện tự động cập nhật (render lại theo dữ liệu)
    - cú pháp: 
        const [state, setState] = useState[initState]
    
     +trong đó:- useState: Hàm cần sử dụng
             - initState: Đối số đầu vào của Hàm, là giá trị khởi tạo
             - state: phần tử được return, chính là giá trị innitState. * state == initState *
             - setState: Là hàm được sử dụng để setup lại cho state. Gọi hàm setState(), truyền vào dữ liệu cần thay đổi => state sẽ nhận dữ liệu đó.
    - Cập nhật state với Obj
        - dùng spread operate để giữ nguyên giá trị Obj ban đầu và cập nhật thêm giá trị mới
        - setInfo({
            ...info,
            * thêm giá trị cần cập nhật*
        })
        - JSON.stringify để chuyển dữ liệu thành dạng string

    - Lưu ý:
        - Component được re-render sau khi 'setState'
        - Initial State chỉ dùng cho lần đầu
        - Set State với Callback?





method Array: 
        - Filter: trả ra mảng mới, các phần tử trong mảng thỏa điều kiện nào đó
        vd: const fileterdNum = num.filter(item,index) => item > 4

        - Map: trả ra mảng mới, các phần tử thay đổi dựa trên điều kiện
        vd: const mapNum = num.map((item, index) => item *2)

        -List: 
        vd: {arr.map(item,index) => {
            return <h1>{item}</h1>
        }}

        {array.map((item, index) => (
            <h1>{item}</h1>
        ))}
        *Key là một props đặc biệt của React. Cần key để React phân biệt các item với nhau và ngược lại trong một list rendering (là một UI được render ra từ một mảng có cấu trúc giống nhau chỉ khác nhau content*
        *Key chỉ dùng cho mảng và dùng cho thẻ cha. Không nên dùng cho thẻ con. trong 1 component không được cho key trùng nhau*
RENDER THEO ĐIỀU KIỆN.
            const [value, setValue] = useState()
        -Cấu trúc với ternary operator: Toán tử ba ngôi
        *{value
            ? "điều kiện 1"
            : "điều kiện 2"
            }
        -Inline với toán tử &&
        cú pháp: {!value && "nội dung cần hiển thị"}
