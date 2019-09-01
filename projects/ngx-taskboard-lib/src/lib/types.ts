
/**
 * Item to render
 *
 * @export
 */
export interface CardItem {
    id: number;
    name: string;
    status?: string;
    color?: string;
    user?: string;
    priority?: number;
}

/**
 * All the collapse stated of every group item (horizontal / vertical)
 *
 * @export
 */
export interface CollapseState {
    name: string;
    collapsed: boolean;
}

/**
 * Object to determine the scrollability
 *
 * @export
 */
export interface Scrollable {
    hScroll: boolean;
    vScroll: boolean;
}

/**
 * Datatype which is emitted when an item should be added
 *
 * @export
 */
export interface ClickEvent {
    hGroup: string;
    vGroup: string;
}

/**
 * Group keys to determine the correct groups internally
 *
 * @export
 */
export interface GroupKeys {
    hGroupKey: string;
    vGroupKey: string;
}

/**
 * Object for the headings in which you can set color etc.
 *
 * @export
 */
export interface GroupHeading {
    value: string;
    display: string;
    color: string;
    orderId: number;
}