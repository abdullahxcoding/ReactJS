import React from 'react'
import { Star, Plus } from 'lucide-react'

const FeaturedCard = (props) => {

    return (
        <div className="relative w-52 rounded-2xl border border-zinc-700 bg-[#1f1f1f] overflow-hidden shadow-lg">

            <div className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                -30%
            </div>

            <div className="flex h-32 items-center justify-center bg-[#1f1f1f]">
                <img
                    src={props.item.image}
                    alt="Nike Air Runner Pro"
                    className="h-16 object-contain"
                />
            </div>


            <div className="bg-[#2a2a2a] p-3">
                <h3 className="text-xl font-semibold text-white h-14 overflow-hidden">{props.item.name}</h3>

                <p className="mt-1 text-sm font-medium text-zinc-400">{props.item.subCategory}</p>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1">
                    <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                        ))}
                    </div>
                    <span className="text-sm text-zinc-400">({props.item.rating.count})</span>
                </div>

                {/* Price + Button */}
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-sky-500">${((props.item.priceCents / 280) * 0.7).toFixed(1)}</span>
                        <span className="text-lg font-semibold text-zinc-500 line-through">
                            ${(props.item.priceCents / 280).toFixed(1)}
                        </span>
                    </div>

                    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-500 text-white transition hover:bg-zinc-700">
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default FeaturedCard