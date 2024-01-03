/**
 * Represents a point in 2D space.
 */
class Point {
  /**
   * The x-coordinate of the point.
   */
  private x: number;

  /**
   * The y-coordinate of the point.
   */
  private y: number;

  /**
   * Constructs a new Point.
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   */
  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }

  /**
   * Gets the x-coordinate of the point.
   * @returns The x-coordinate.
   */
  getX(): number {
      return this.x;
  }

  /**
   * Gets the y-coordinate of the point.
   * @returns The y-coordinate.
   */
  getY(): number {
      return this.y;
  }

  /**
   * Calculates the distance between two points.
   * @param other - The other point.
   * @returns The distance between the points.
   */
  calculateDistance(other: Point): number {
      const deltaX = this.x - other.getX();
      const deltaY = this.y - other.getY();
      return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
}
