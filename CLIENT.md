# Client assumptions

In this artifact I talk about my assumptions, problems faced as well as alternative solutions that I didn't take use of.

#### Requirements:

- **HTML**
- **CSS ("Using less")**
- **JavaScript**
- **React** together with **Redux**

The app was set up to be browsed such as:

- http://localhost:8080/#/addbox
- http://localhost:8080/#/listboxes

I then made the assumption that http://localhost:8080/# should be the index page which where the user first arrives. Thus, I made a simple view without any functionality.

#### React together with Redux

I used React together with Redux to handle the global state of the application. I used it correctly with actions/reducers kept in respective directories. As the application was rather small i used a local state when the state was only used locally. For example this piece of code below was only used locally in "ListView.js".

```
const [boxList, setBoxList] = useState([]);
...
{!boxList.length > 0 ? (<p className="listbox-view-p">There is currently no dispatches available</p>) :
          (
            <table>
              <thead>
                <tr>
                  <th>Receiver</th>
                  <th>Weight</th>
                  <th>Box colour</th>
                  <th>Shipping cost</th>
                </tr>
              </thead>
              <tbody>{boxTableHandler()}</tbody>
            </table>
          )}
```

The code intends to display information about the retrieved boxes from the backend. If the state is empty, The message is shown, else the boxes is rendered.

#### Form validation

I separated each input in the form to individual components to increase modularity.
I then could add logic to each input without making files to large thus reducing readability and understandability.
When the user clicks the button "Save" Each input validates before the request is made.

#### Reseting form state

As some recent functionality in react-router was deprecated i created an action called "resetFormState" which every reducer listened to. I dispatched this action everytime the user visited /# or /listboxes.
To dispatch this everytime the user visited the different views I took use of the react hook **useEffect()** in the MainView and ListView. This action was also dispatched when the user added a box, as you would not want the user to POST the identical information multiple times.
I made the assumption that if the user clicks the navigation link currently visited it wouldn't want its form cleared. But if you refresh or reload the application the form gets cleared.

#### Requests to back-end

I took use of **Axios.js** as it's a simple to use HTTP client for the browser.
The requests to the backend consisted of

- POST /addbox
- GET /listboxes

If the requests wasn't completed by the client, the user would either be presented with "Something went wrong" (in addbox view) or with "There is currently no dispatches available" (in listboxes view).

#### Less

One requirement when creating the application was to use **Less** as a preprocessor to **CSS**.
As I've only used SaSS before (SCSS) it's a welcome challenge to use Less instead.

#### Alternative solutions:

- **Regular expression for input validation**
  When i first design the form i used the weight option as an "input text". Then i removed all the chars other than numbers 0-9 with regex.
  but since "input number" only allows a number (and some other chars) I then only checked if the value was an empty string (returned when you include previously mentioned chars in the input) or if the given weight was a negative number.

### Problems faced

The major problem faced when developing the application was when i was to test the client. A very time draining problem which caused my application to lack quality.
