-- AlterTable
CREATE SEQUENCE faqs_serial_seq;
ALTER TABLE "faqs" ALTER COLUMN "serial" SET DEFAULT nextval('faqs_serial_seq');
ALTER SEQUENCE faqs_serial_seq OWNED BY "faqs"."serial";
