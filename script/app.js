import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

tippy('#myButton', {
    content: 'My tooltip!',
});

tippy.setDefaultProps({ delay: 50 });