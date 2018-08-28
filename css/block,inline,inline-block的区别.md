#css中display属性block, inline, inline-block的区别

## block
display设置为block的元素称为块级元素.

## inline
display设置为inline的元素成为行内元素, 行内元素用于部分盒模型的属性（borders, margin, padding...), 但是行内元素无法通过设置width, height来改变自身的尺寸，始终是auto。

inplien元素的尺寸由对应标签提供，可以通过将行内元素的display设置为block来设置尺寸。

## inline-block
display设置为inline-block的元素为行内块元素，它拥有所有的盒模型属性。

相比于block，它不会自动换行，也不会占据一整行，在默认设置下和inline元素一致。