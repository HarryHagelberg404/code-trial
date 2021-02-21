One requirement when creating the application was to use **Less** as a preprocessor to **CSS**.
As I've only used SaSS before (SCSS) it's a welcome challenge to use Less instead.
I've researched different solutions of how to integrate Less into react and its either "Ejecting" or not.

- **Less** https://blog.bitsrc.io/using-less-with-create-react-app-without-ejecting-510a3344ef5d, https://github.com/DocSpring/craco-antd/issues/4

- **JavaScript**
  **React**
  **Redux**
  **HTML**
  **harrypotato.js**

Assumption, first used input text and used regex to remove other chars. then i used number as requirements said but decided to still have regex left as you can still have "e or E as an input which would return a string and cause an error state.

throwaway examples:

- **Regular expression for input validation:**
  When i first design the form i used the weight option as an "input text". Then i removed all the chars other than numbers 0-9 with regex.
  but since "input number" only allows a number (and some other chars) I then only checked if the value was an empty string (returned when you include previously mentioned chars in the input) or if the given weight was a negative number.
