import {Table, Column, Model, HasMany, PrimaryKey, Default} from 'sequelize-typescript';

@Table
export default class Users extends Model<Users> {
 
  @PrimaryKey
  @Column
  openId: string;
 
  @Column
  birthdate: Date;

  @Column
  constellation:number;

  @Column
  sex:number;

  @Column
  age:number;

  @Default(new Date())
  @Column
  registerDate:Date;
}

