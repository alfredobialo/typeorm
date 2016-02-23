export interface RelationOptions {

    /**
     * Field name to be used in the database.
     */
    name?: string;

    /**
     * If set to true then it means that related object can be allowed to be inserted to the db.
     */
    isCascadeInsert?: boolean;

    /**
     * If set to true then it means that related object can be allowed to be updated in the db.
     */
    isCascadeUpdate?: boolean;

    /**
     * If set to true then it means that related object can be allowed to be remove from the db.
     */
    isCascadeRemove?: boolean;

    /**
     * Old column name. Used to make safe schema updates.
     */
    oldColumnName?: string;

    /**
     * Indicates if relation column value can be nullable or not.
     */
    nullable?: boolean;

}