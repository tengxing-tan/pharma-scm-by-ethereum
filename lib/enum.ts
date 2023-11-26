export const SHIPMENT_STATUS = {
    OUT_FOR_DELIVERY: 'Out for delivery',
    IN_TRANSIT: 'In transit',
    ARRIVED_AT_DESTINATION: 'Arrived at destination',
    DELIVERED: 'Delivered',
    DELAYED: 'Delayed',
    HELD_FOR_INSPECTION: 'Held for inspection',
    RETURNED_OR_REJECTED: 'Returned or rejected',
    LOST_OR_DAMAGED: 'Lost or damaged',
}

export enum STATUS {
    NONE = 'None',
    OUT_FOR_DELIVERY = 'Out for delivery',
    IN_TRANSIT = 'In transit',
    ARRIVED_AT_DESTINATION = 'Arrived at destination',
    DELIVERED = 'Delivered',
    DELAYED = 'Delayed',
    HELD_FOR_INSPECTION = 'Held for inspection',
    RETURNED_OR_REJECTED = 'Returned or rejected',
    LOST_OR_DAMAGED = 'Lost or damaged',
}

export enum Process {
    // manufacturing & packaging
    UNDERWENT_MIXING_ENCAPSULATION = 'UNDERWENT_MIXING_ENCAPSULATION',
    LABELLING_PACKAGING = 'LABELLING_PACKAGING',
    // importer / warehousing
    READY_TO_SHIP = 'READY_TO_SHIP',
    SHIPPED = 'SHIPPED',
    STORE_IN_WAREHOUSE = 'STORE_IN_WAREHOUSE',
    DELIVERED = 'DELIVERED',
    REJECTED = 'REJECTED',
    RETURNED = 'RETURNED',
}
