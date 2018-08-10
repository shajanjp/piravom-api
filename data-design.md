## Store
 * title : String
 * about : String
 * owner : => User
 * open : 
 	* day : String
 	* time : String
 * address : -> Address
 * logo : String
 * photos : [String]
 * phone : String
 * website : String
 * email : String

## Product
 * title : String
 * description : String
 * photos : [String]
 * category : String
 * tags : [String]
 * variants : [String]
 * make : String
 * created_by : => User
 * created_at : Datetime
 * updated_by : => User
 * updated_at : Datetime

## Products in Store
 * store : String
 * product : => Product
 * varient: String
 * selling price : Number
 * actual price : number

## Place
 * title : String
 * photos : [String]
 * tags : [String]
 * description : String
 * category : String
 * created_by : => User
 * created_at : Datetime
 * updated_by : => User
 * updated_at : Datetime

## Event
 * title : String
 * description : String
 * event_start : Datetime
 * event_end : Datetime
 * category : String
 * created_by : => User
 * created_at : Datetime
 * updated_by : => User
 * updated_at : Datetime

## Blog
 * title : String
 * description : String
 * photos : [String]
 * author : => User
 * date : Datetime
 * category : String
 * tags : [String]

## Rating
 * ratingUser : => User
 * store : => Store
 * product : => Product
 * user : => User
 * rating : Number
 * oneline : String
 * comment : String
 * created_at : Datetime
 * updated_at : Datetime

## Service
 * title : String
 * logo : String
 * owner : => User 
 * description : String
 * open : 
 	* day : String
 	* time : String
 * category : String
 * tags : String
 * phone : String
 * address : -> Address
 * email : String
 * website : String
 * created_by : => User
 * created_at : Datetime
 * updated_at : Datetime

## Bus Timing
 * title : String
 * time : String
 * to_place : String
 * via_places : [String]

## Emergency Phone Number
 * title : String
 * place : String
 * numbers : String

## Users
 * full_name : String
 * about : String
 * address : -> Address
 * badges : => [Badge]
 * permissions : [String]
 * phone : String
 * email : String

## Movie
 * film : String
 * theatre : => Place
 * screen : String
 * shows : [String]

## Report
 * title : String
 * description : String 
 * module : String
 * created_by : => User
 * created_at : Datetime
 * status: Status
 * updated_at : Datetime

## Badge
 * title : String
 * description : String
 * points : Number

## Permission
 * title : String 
 * description : String 

## Address
 * Street
 * city
 * landmark
 * pincode
 * state
 * country
 * phone