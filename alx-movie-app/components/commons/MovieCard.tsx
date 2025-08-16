import React from "react";

const MovieCard: React.FC = () => {
    return (
        <div className="border rounded-lg shadow p-4">
            <h3 className="font-bold text-lg">Movie Title</h3>
            <p className="text-sm text-gray-600">Movie description goes here.</p>
        </div>
    );
};

export default MovieCard;
