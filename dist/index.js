"use strict";
/**
 * Represents a point in 2D space.
 */
var Point = /** @class */ (function () {
    /**
     * Constructs a new Point.
     * @param x - The x-coordinate.
     * @param y - The y-coordinate.
     */
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Gets the x-coordinate of the point.
     * @returns The x-coordinate.
     */
    Point.prototype.getX = function () {
        return this.x;
    };
    /**
     * Gets the y-coordinate of the point.
     * @returns The y-coordinate.
     */
    Point.prototype.getY = function () {
        return this.y;
    };
    /**
     * Calculates the distance between two points.
     * @param other - The other point.
     * @returns The distance between the points.
     */
    Point.prototype.calculateDistance = function (other) {
        var deltaX = this.x - other.getX();
        var deltaY = this.y - other.getY();
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };
    return Point;
}());
