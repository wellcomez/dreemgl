/**
 * @class foldcontainer
 * @extends view
 * the foldcontainer shows/hides all its children when the top bar is clicked
 */
/**
 * @attribute {boolean} collapsed
 * The current state of the foldcontainer. false = open, Ttue = closed.
 */
/**
 * @attribute {String} [icon="times"]
 * The icon to use in the top left of the foldcontainer. See the FontAwesome cheatsheet for acceptable icon names.
 */
/**
 * @attribute {String} [title="folding thing"]
 */
/**
 * @attribute {vec4} [basecolor="0.501960813999176,0.501960813999176,0.7529411911964417,1"]
 * The main color from which the foldcontainer will build some gradients.
 */
/**
 * @attribute {float32} [fontsize="12"]
 */
/**
 * @attribute {boolean} autogradient
 */
/**
 * @method toggle
 * Function to change the open/closed state. Used by the click handler of the clickablebar.
 */
/**
 * @method render
 */