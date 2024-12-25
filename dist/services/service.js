"use strict";
// import { Model, Document, FilterQuery, UpdateQuery } from "mongoose";
// export abstract class BaseService<T extends Document> {
//   protected model: Model<T>;
//   constructor(model?: Model<T>) {
//     if (model) {
//       this.model = model;
//     }
//   }
//   abstract initModel(): Model<T>;
//   protected getModel(): Model<T> {
//     if (!this.model) {
//       this.model = this.initModel();
//     }
//     return this.model;
//   }
//   async insert(data: Partial<T>): Promise<T> {
//     const model = this.getModel();
//     const doc = new model(data);
//     return await doc.save();
//   }
//   async findById(id: string): Promise<T | null> {
//     const model = this.getModel();
//     return await model.findById(id).exec();
//   }
//   async find(
//     filter: FilterQuery<T>,
//     sort?: Record<string, 1 | -1>,
//     limit?: number
//   ): Promise<T[]> {
//     const model = this.getModel();
//     const query = model.find(filter).sort(sort);
//     if (limit) query.limit(limit);
//     return await query.exec();
//   }
//   async findOne(filter: FilterQuery<T>): Promise<T | null> {
//     const model = this.getModel();
//     return await model.findOne(filter).exec();
//   }
//   async update(filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<T> {
//     const model = this.getModel();
//     const result = await model.findOneAndUpdate(filter, update).exec();
//     return result;
//   }
//   async remove(filter: FilterQuery<T>): Promise<T> {
//     const model = this.getModel();
//     const result = await model
//       .findOneAndDelete(filter, { deleted: true })
//       .exec();
//     return result;
//   }
//   async hardRemove(filter: FilterQuery<T>): Promise<boolean> {
//     const model = this.getModel();
//     const result = await model.deleteMany(filter).exec();
//     return result.deletedCount > 0;
//   }
// }
