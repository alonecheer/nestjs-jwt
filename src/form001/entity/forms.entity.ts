import {
    AllowNull,
    Column,
    Model,
    PrimaryKey,
    Table,
    AutoIncrement,
    HasMany,
    ForeignKey
} from 'sequelize-typescript';
import { User } from 'src/users/entity/users.entity';

@Table({
    timestamps: false,
    paranoid: false,
})
export class Form001 extends Model<Form001> {
    @PrimaryKey
    @AutoIncrement
    @Column
    order_id: number
    
    @Column
    loca: string;


    @Column
    date: string;

    @ForeignKey(() => User)
    @Column
    sid: string;
   
}