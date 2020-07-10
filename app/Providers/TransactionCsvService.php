<?php

namespace App\Providers;

use App\Transaction;
use Illuminate\Support\Facades\Storage;

class TransactionCsvService
{
    public function createCsvFromTransaction(int $transaction_id)
    {
        $transaction = Transaction::find($transaction_id);
        $pickup_details = $transaction->pickupDetails;
        $sender = $transaction->sender;
        $receiver = $transaction->receiver;
        $items = $pickup_details->items;
        $csv_data = $this->commaSeperateString($this->getHeader());
        $row_base = [
            $transaction->created_at,
            $transaction->id,
            $pickup_details->id,
            $sender->name,
            $sender->company,
            $sender->street_address,
            $sender->suburd,
            $sender->state,
            $sender->post_code,
            $sender->phone_number,
            $receiver->name,
            $receiver->company,
            $receiver->street_address,
            $receiver->suburd,
            $receiver->state,
            $receiver->post_code,
            $receiver->phone_number,
            $pickup_details->parcel_type,
            $pickup_details->special_instruction ?? '',
            $pickup_details->pickup_date,
            $pickup_details->ready_at,
            $pickup_details->closing_time,
        ];
        foreach ($items as $item) {
            $row = $row_base;
            array_push($row,
                $item->description,
                $item->commodity,
                $item->items,
                $item->total_weight,
                $item->length,
                $item->width,
                $item->height
            );
            $csv_data .= "\n" . $this->commaSeperateString($row);
        }
        Storage::put('/public/transactions/' . $transaction_id . '.csv', $csv_data);
    }

    public function commaSeperateString(array $arr): string
    {
        return implode(',', $arr);
    }

    public function getHeader(): array
    {
        return [
            'Booking Date & Time',
            'Consignment Number',
            'Pickup ID',
            'Sender Name',
            'Sender Company',
            'Sender Street Address',
            'Sender Suburb',
            'Sender State',
            'Sender Post Code',
            'Sender Phone',
            'Receiver Name',
            'Receiver Company',
            'Receiver Street Address',
            'Receiver Suburb',
            'Receiver State',
            'Receiver Post Code',
            'Receiver Phone',
            'Parcel Type',
            'DG Code',
            'Pickup Date',
            'Pickup Time',
            'Pickup Time Close',
            'Description',
            'Commodity',
            'Number of Items',
            'Total Weight',
            'Length',
            'Width',
            'Height',
        ];
    }
}
