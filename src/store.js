import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articles: {
      100: {
        title: 'Lorem ipsum dolor sit amet',
        description: '<p>Consectetur adipiscing elit. Phasellus tincidunt rutrum dolor, sagittis ultricies velit placerat ac. Maecenas nec turpis vitae sem egestas faucibus. Nam feugiat quam non ante faucibus eleifend. Nam a pharetra velit, vel vehicula enim. Nullam sit amet fringilla nisl.</p><p>Aenean quis quam a ex suscipit bibendum in nec mauris.</p><p>Praesent ac magna id libero commodo pulvinar eget id metus. Curabitur tincidunt, augue euismod mattis convallis, ligula metus faucibus enim, at finibus eros justo sed nisi. Nullam sollicitudin, nulla nec fringilla commodo, justo arcu scelerisque sapien, eget dignissim tellus nulla vitae nunc. Aliquam ut nibh mollis, aliquam magna et, mollis augue. Integer et nisl sed arcu dictum consequat in non sapien. Nunc pulvinar lorem et tincidunt fringilla. Sed at commodo justo, sed elementum nisl.</p>',
        summary: 'Consectetur adipiscing elit. Phasellus tincidunt rutrum dolor, sagittis ultricies velit placerat ac.'
      },
      101: {
        title: 'Vestibulum faucibus mi id suscipit semper',
        description: '<p>Sed egestas purus nisl, vitae pharetra ante fermentum sed. Duis mi mi, rhoncus et turpis eu, sagittis efficitur dolor. Mauris nec metus nisi. Vestibulum quis rhoncus erat. Aenean ut commodo mauris. Nulla ut ex pellentesque, feugiat metus ac, vulputate diam. In mattis neque quis sagittis lacinia. Phasellus blandit in metus ut viverra. Nam mattis condimentum erat id ullamcorper. Maecenas et odio leo. Mauris vel nunc in eros mollis consectetur non id lectus. Quisque viverra, metus et venenatis malesuada, eros risus posuere justo, nec sagittis ex eros ut ipsum. Curabitur non turpis a erat vehicula laoreet.</p>',
        summary: 'Sed egestas purus nisl, vitae pharetra ante fermentum sed...'
      },
      102: {
        title: 'Suspendisse in ex orci',
        description: '<p>Sed mattis enim nulla, in cursus diam ultricies sed. Nulla sed elit ac dolor sodales volutpat. Proin scelerisque ultrices nisi, eget tristique leo scelerisque vel. Nunc dapibus velit in mi consequat tincidunt. Aliquam maximus lorem ac finibus sollicitudin. Nam non ex quis sapien molestie mollis in nec urna. In vitae porttitor tellus, sed malesuada metus.</p><p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla finibus ligula ut orci dictum, pulvinar viverra urna lacinia. Quisque pulvinar ante ac libero lacinia, sed ullamcorper nisi fermentum.</p>',
        summary: 'Sed mattis enim nulla, in cursus diam ultricies'
      },
      103: {
        title: 'Nunc Nisi Nulla',
        description: '<p>Viverra a ligula sed, lobortis dapibus velit. Sed eu metus ac nisl commodo congue. Vestibulum bibendum mauris id tellus rutrum, sit amet egestas risus volutpat. Cras vestibulum, enim vitae interdum pellentesque, turpis lectus gravida quam, et vulputate nisl neque nec velit. In at felis eget nunc lacinia sollicitudin. Sed et quam sit amet risus malesuada hendrerit.</p><p>Suspendisse potenti.</p>',
        summary: ''
      },
      104: {
        title: 'Phasellus est elit, sollicitudin a lectus eu',
        description: '<p>Tristique interdum sapien. Quisque pharetra, nunc non ultricies vulputate, risus justo consequat ante, sodales auctor lectus justo vitae eros. Phasellus vestibulum enim molestie sagittis auctor. Duis eleifend lobortis ultrices. Nullam tempus erat non mauris consectetur vestibulum.</p><p>Integer consequat purus ac lorem consectetur, eget pharetra libero porttitor. Quisque semper tempor mi eu lobortis. Sed a consequat dolor. Aenean lectus felis, sodales at leo viverra, varius venenatis lorem. Nunc at tortor iaculis, rhoncus purus ac, congue mi.</p><p>Etiam feugiat sit amet ipsum sed tempor. Praesent fermentum mollis odio eu iaculis. Phasellus mollis metus eu arcu efficitur placerat. Phasellus at aliquet lorem. Nullam a rhoncus orci.</p>',
        summary: 'Tristique interdum sapien. Quisque pharetra, nunc non...'
      }
    },
    users: {
      0: {
        avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
        name: 'Pat Smith',
        username: 'psmith'
      },
      1: {
        avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
        name: 'Charlie Vasquez',
        username: 'charlie'
      },
      2: {
        avatar: 'http://placekitten.com/100/100',
        name: 'Sanket Agarwal',
        username: 'kittens'
      }
    }
  }
});

export default store