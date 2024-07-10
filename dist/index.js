"use strict";let t=class{constructor(t){this.value=t,this.next=null,this.prev=null}};class e{constructor(){this.head=null,this.tail=null,this.length=0}printAll(){if(!this.head)return this;let t=this.head;do{console.log(t.value),t=t.next}while(t!==this.head);return this}toArray(){const t=[];if(!this.head)return t;let e=this.head;do{t.push(e.value),e=e.next}while(e!==this.head);return t}appendHead(e){const h=new t(e);return this.head?(h.next=this.head,h.prev=this.tail,this.head.prev=h,this.head=h,this.tail.next=this.head):(this.head=h,this.tail=h,h.next=h,h.prev=h),this.length++,this}appendTail(e){const h=new t(e);return this.tail?(h.prev=this.tail,h.next=this.head,this.tail.next=h,this.head.prev=h,this.tail=h):(this.head=h,this.tail=h,h.next=h,h.prev=h),this.length++,this}appendAt(e,h){if(e<0||e>this.length)throw new Error("Index out of bounds");if(0===e)return this.appendHead(h);if(e===this.length)return this.appendTail(h);const i=new t(h);let s=this.head;for(let t=0;t<e-1;t++)s=s.next;return i.next=s.next,i.prev=s,s.next.prev=i,s.next=i,this.length++,this}clear(){return this.head=null,this.tail=null,this.length=0,this}reverse(){if(!this.head||!this.head.next)return this;let t=this.head,e=null,h=null;do{h=t.next,t.next=t.prev,t.prev=h,e=t,t=h}while(t!==this.head);return this.tail=this.head,this.head=e,this}indexOf(t){if(!this.head)return-1;let e=0,h=this.head;do{if(h.value===t)return e;h=h.next,e++}while(h!==this.head);return-1}indexOfAll(t){const e=[];if(!this.head)return e;let h=0,i=this.head;do{i.value===t&&e.push(h),i=i.next,h++}while(i!==this.head);return e}isEmpty(){return 0===this.length}removeHead(){return this.head?(this.head===this.tail?(this.head=null,this.tail=null):(this.head=this.head.next,this.head.prev=this.tail,this.tail.next=this.head),this.length--,this):this}removeTail(){return this.head?(this.head===this.tail?(this.head=null,this.tail=null):(this.tail=this.tail.prev,this.tail.next=this.head,this.head.prev=this.tail),this.length--,this):this}removeAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");if(0===t)return this.removeHead();if(t===this.length-1)return this.removeTail();let e=this.head;for(let h=0;h<t;h++)e=e.next;return e.prev.next=e.next,e.next.prev=e.prev,this.length--,this}removeBy(t){const e=this.indexOf(t);return-1!==e?this.removeAt(e):this}removeAllBy(t){let e=this.head,h=0;for(;e&&h<this.length;)e.value===t?(e=e.next,this.removeAt(h)):(e=e.next,h++);return this}getHead(){return this.head}getTail(){return this.tail}getAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e=this.head;for(let h=0;h<t;h++)e=e.next;return e}getBy(t){if(!this.head)return null;let e=this.head;do{if(e.value===t)return e;e=e.next}while(e!==this.head);return null}getAllBy(t){const e=[];if(!this.head)return e;let h=this.head;do{h.value===t&&e.push(h),h=h.next}while(h!==this.head);return e}getNthFromEnd(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e;if(t<this.length/2){e=this.tail;for(let h=0;h<t;h++)e=e.prev}else{e=this.head;for(let h=0;h<this.length-1-t;h++)e=e.next}return e}toString(){return"CircularDoublyLinkedList"}}let h=class{constructor(t){this.value=t,this.next=null}};class i{constructor(){this.head=null,this.tail=null,this.length=0}printAll(){if(!this.head)return this;let t=this.head;do{console.log(t.value),t=t.next}while(t!==this.head);return this}toArray(){const t=[];if(!this.head)return t;let e=this.head;do{t.push(e.value),e=e.next}while(e!==this.head);return t}appendHead(t){const e=new h(t);return this.head?(e.next=this.head,this.head=e,this.tail.next=this.head):(this.head=e,this.tail=e,e.next=e),this.length++,this}appendTail(t){const e=new h(t);return this.tail?(this.tail.next=e,this.tail=e,this.tail.next=this.head):(this.head=e,this.tail=e,e.next=e),this.length++,this}appendAt(t,e){if(t<0||t>this.length)throw new Error("Index out of bounds");if(0===t)return this.appendHead(e);if(t===this.length)return this.appendTail(e);const i=new h(e);let s=this.head;for(let e=0;e<t-1;e++)s=s.next;return i.next=s.next,s.next=i,this.length++,this}clear(){return this.head=null,this.tail=null,this.length=0,this}reverse(){if(!this.head||!this.head.next)return this;let t=null,e=this.head,h=null;this.head;do{h=e.next,e.next=t,t=e,e=h}while(e!==this.head);return this.head.next=t,this.tail=this.head,this.head=t,this}indexOf(t){if(!this.head)return-1;let e=0,h=this.head;do{if(h.value===t)return e;h=h.next,e++}while(h!==this.head);return-1}indexOfAll(t){const e=[];if(!this.head)return e;let h=0,i=this.head;do{i.value===t&&e.push(h),i=i.next,h++}while(i!==this.head);return e}isEmpty(){return 0===this.length}removeHead(){return this.head?(this.head===this.tail?(this.head=null,this.tail=null):(this.head=this.head.next,this.tail.next=this.head),this.length--,this):this}removeTail(){if(!this.head)return this;if(this.head===this.tail)this.head=null,this.tail=null;else{let t=this.head;for(;t.next!==this.tail;)t=t.next;t.next=this.head,this.tail=t}return this.length--,this}removeAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");if(0===t)return this.removeHead();if(t===this.length-1)return this.removeTail();let e=this.head;for(let h=0;h<t-1;h++)e=e.next;return e.next=e.next.next,this.length--,this}removeBy(t){const e=this.indexOf(t);return-1!==e?this.removeAt(e):this}removeAllBy(t){let e=this.head,h=0;for(;e&&h<this.length;)e.value===t?(e=e.next,this.removeAt(h)):(e=e.next,h++);return this}getHead(){return this.head}getTail(){return this.tail}getAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e=this.head;for(let h=0;h<t;h++)e=e.next;return e}getBy(t){if(!this.head)return null;let e=this.head;do{if(e.value===t)return e;e=e.next}while(e!==this.head);return null}getAllBy(t){const e=[];if(!this.head)return e;let h=this.head;do{h.value===t&&e.push(h),h=h.next}while(h!==this.head);return e}getNthFromEnd(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e=this.head,h=this.head;for(let h=0;h<=t;h++)e=e.next;for(;e!==this.head;)e=e.next,h=h.next;return h}toString(){return"CircularSinglyLinkedList"}}let s=class{constructor(t){this.value=t,this.next=null,this.prev=null}};class n{constructor(){this.head=null,this.tail=null,this.length=0}printAll(){let t=this.head;for(;t;)console.log(t.value),t=t.next;return this}toArray(){const t=[];let e=this.head;for(;e;)t.push(e.value),e=e.next;return t}appendHead(t){const e=new s(t);return this.head?(e.next=this.head,this.head.prev=e,this.head=e):(this.head=e,this.tail=e),this.length++,this}appendTail(t){const e=new s(t);return this.tail?(e.prev=this.tail,this.tail.next=e,this.tail=e):(this.head=e,this.tail=e),this.length++,this}appendAt(t,e){if(t<0||t>this.length)throw new Error("Index out of bounds");if(0===t)return this.appendHead(e);if(t===this.length)return this.appendTail(e);const h=new s(e);let i=this.head;for(let e=0;e<t-1;e++)i=i.next;return h.next=i.next,h.prev=i,i.next.prev=h,i.next=h,this.length++,this}clear(){return this.head=null,this.tail=null,this.length=0,this}reverse(){if(!this.head||!this.head.next)return this;let t=this.head,e=null,h=null;for(;t;)h=t.next,t.next=e,t.prev=h,e=t,t=h;return this.tail=this.head,this.head=e,this}indexOf(t){let e=0,h=this.head;for(;h;){if(h.value===t)return e;h=h.next,e++}return-1}indexOfAll(t){const e=[];let h=0,i=this.head;for(;i;)i.value===t&&e.push(h),i=i.next,h++;return e}isEmpty(){return 0===this.length}removeHead(){return this.head?(this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,this):this}removeTail(){return this.tail?(this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,this):this}removeAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");if(0===t)return this.removeHead();if(t===this.length-1)return this.removeTail();let e=this.head;for(let h=0;h<t;h++)e=e.next;return e.prev.next=e.next,e.next.prev=e.prev,this.length--,this}removeBy(t){const e=this.indexOf(t);return-1!==e?this.removeAt(e):this}removeAllBy(t){let e=this.head;for(;e;)if(e.value===t){const t=e;e=e.next,this.removeAt(this.indexOf(t.value))}else e=e.next;return this}getHead(){return this.head}getTail(){return this.tail}getAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e=this.head;for(let h=0;h<t;h++)e=e.next;return e}getBy(t){let e=this.head;for(;e;){if(e.value===t)return e;e=e.next}return null}getAllBy(t){const e=[];let h=this.head;for(;h;)h.value===t&&e.push(h),h=h.next;return e}getNthFromEnd(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e;if(t<this.length/2){e=this.tail;for(let h=0;h<t;h++)e=e.prev}else{e=this.head;for(let h=0;h<this.length-1-t;h++)e=e.next}return e}toString(){return"DoublyLinkedList"}}class r{constructor(t){this.value=t,this.next=null}}class l{constructor(){this.head=null,this.tail=null,this.length=0}printAll(){let t=this.head;for(;t;)console.log(t.value),t=t.next;return this}toArray(){const t=[];let e=this.head;for(;e;)t.push(e.value),e=e.next;return t}appendHead(t){const e=new r(t);return this.head?(e.next=this.head,this.head=e):(this.head=e,this.tail=e),this.length++,this}appendTail(t){const e=new r(t);return this.head?(this.tail.next=e,this.tail=e):(this.head=e,this.tail=e),this.length++,this}appendAt(t,e){if(t<0||t>this.length)throw new Error("Index out of bounds");if(0===t)return this.appendHead(e);if(t===this.length)return this.appendTail(e);const h=new r(e);let i=this.head;for(let e=0;e<t-1;e++)i=i.next;return h.next=i.next,i.next=h,this.length++,this}clear(){return this.head=null,this.tail=null,this.length=0,this}reverse(){if(!this.head||!this.head.next)return this;let t=null,e=this.head,h=null;for(;e;)h=e.next,e.next=t,t=e,e=h;return this.tail=this.head,this.head=t,this}indexOf(t){let e=0,h=this.head;for(;h;){if(h.value===t)return e;h=h.next,e++}return-1}indexOfAll(t){const e=[];let h=0,i=this.head;for(;i;)i.value===t&&e.push(h),i=i.next,h++;return e}isEmpty(){return 0===this.length}removeHead(){return this.head?(this.head=this.head.next,this.length--,0===this.length&&(this.tail=null),this):this}removeTail(){if(!this.head)return this;if(this.head===this.tail)return this.head=null,this.tail=null,this.length=0,this;let t=this.head;for(;t.next!==this.tail;)t=t.next;return t.next=null,this.tail=t,this.length--,this}removeAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");if(0===t)return this.removeHead();if(t===this.length-1)return this.removeTail();let e=this.head;for(let h=0;h<t-1;h++)e=e.next;return e.next=e.next.next,this.length--,this}removeBy(t){const e=this.indexOf(t);return-1!==e?this.removeAt(e):this}removeAllBy(t){let e=this.head;for(;e;)e.value===t&&this.removeBy(t),e=e.next;return this}getHead(){return this.head}getTail(){return this.tail}getAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e=this.head;for(let h=0;h<t;h++)e=e.next;return e}getBy(t){let e=this.head;for(;e;){if(e.value===t)return e;e=e.next}return null}getAllBy(t){const e=[];let h=this.head;for(;h;)h.value===t&&e.push(h),h=h.next;return e}getNthFromEnd(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");const e=this.length-1-t;let h=this.head;for(let t=0;t<e;t++)h=h.next;return h}toString(){return"SinglyLinkedList"}}exports.ArrayStack=class{constructor(){this.stack=[]}push(t){return this.stack.push(t),this}pop(){return 0===this.stack.length?null:this.stack.pop()||null}peek(){return this.stack[this.stack.length-1]||null}isEmpty(){return 0===this.stack.length}clear(){return this.stack=[],this}toArray(){return this.stack}toString(){return"ArrayStack"}},exports.CircularDoublyLinkedListStack=class{constructor(){this.stack=new e}push(t){return this.stack.appendTail(t),this}pop(){if(0===this.stack.length)return null;const t=this.stack.getTail().value||null;return this.stack.removeTail(),t}peek(){return this.stack.getTail().value||null}isEmpty(){return 0===this.stack.length}clear(){return this.stack.clear(),this}toArray(){return this.stack.toArray()}toString(){return"CircularDoublyLinkedListStack"}},exports.CircularSinglyLinkedListStack=class{constructor(){this.stack=new i}push(t){return this.stack.appendTail(t),this}pop(){if(0===this.stack.length)return null;const t=this.stack.getTail().value||null;return this.stack.removeTail(),t}peek(){return this.stack.getTail().value||null}isEmpty(){return 0===this.stack.length}clear(){return this.stack.clear(),this}toArray(){return this.stack.toArray()}toString(){return"CircularSinglyLinkedListStack"}},exports.DoublyLinkedListStack=class{constructor(){this.stack=new n}push(t){return this.stack.appendTail(t),this}pop(){if(0===this.stack.length)return null;const t=this.stack.getTail().value||null;return this.stack.removeTail(),t}peek(){return this.stack.getTail().value||null}isEmpty(){return 0===this.stack.length}clear(){return this.stack.clear(),this}toArray(){return this.stack.toArray()}toString(){return"DoublyLinkedListStack"}},exports.SinglyLinkedListStack=class{constructor(){this.stack=new l}push(t){return this.stack.appendTail(t),this}pop(){if(0===this.stack.length)return null;const t=this.stack.getTail().value||null;return this.stack.removeTail(),t}peek(){return this.stack.getTail().value||null}isEmpty(){return 0===this.stack.length}clear(){return this.stack.clear(),this}toArray(){return this.stack.toArray()}toString(){return"SinglyLinkedListStack"}};
