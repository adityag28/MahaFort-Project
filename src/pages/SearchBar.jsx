import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearch, IoClose } from "react-icons/io5";
import { FaFortAwesome } from "react-icons/fa";
import fortsData from '../data/forts-data.json';
import { FaLocationDot } from 'react-icons/fa6';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const navigate = useNavigate();

    // Get unique districts from fortsData
    const uniqueDistricts = [...new Set(fortsData.map(f => f.district))];

    // Filter unique districts
    const filterPlaces = searchTerm
        ? uniqueDistricts.filter(district =>
            district.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    // Filter forts
    const filterForts = searchTerm
        ? fortsData.filter(fort =>
            fort.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setIsDropdownVisible(true);
    };

    const clearSearch = () => {
        setSearchTerm("");
        setIsDropdownVisible(false);
    };

    const handleDistrictClick = (district) => {
        console.log(`Navigating to /district/${district}`);
        navigate(`/district/${district}`);
        clearSearch();
    };

    const handleFortClick = (fortId) => {
        console.log(`Navigating to /forts/${fortId}`);
        navigate(`/forts/${fortId}`);
        clearSearch();
    };

    const handleClickOutside = (e) => {
        if (!e.target.closest('.search-container')) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='search-container'>
            <div className="search-bar">
                <span className="search-icon"><IoSearch /></span>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    onFocus={() => setIsDropdownVisible(true)}
                    placeholder="Search By City or Fort ..."
                    className="search-input"
                />
                {searchTerm && (
                    <button onClick={clearSearch} className="clear-button">
                        <IoClose />
                    </button>
                )}
            </div>

            {/* Dropdown Results */}
            {isDropdownVisible && searchTerm && (
                <div className="dropdown-container">
                    {/* Districts Section */}
                    {filterPlaces.length > 0 && (
                        <div>
                            <div className="category-header">
                                <h3>Districts</h3>
                            </div>
                            {filterPlaces.map((district, index) => (
                                <div
                                    key={index}
                                    className="result-item"
                                    onClick={() => handleDistrictClick(district)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div className="icon-container">
                                        <FaLocationDot className="icon" />
                                    </div>
                                    <div className="item-details">
                                        <div className="item-name">{district}</div>
                                        <div className="item-type">District • Maharashtra</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Forts Section */}
                    {filterForts.length > 0 && (
                        <div>
                            <div className="category-header">
                                <h3>Forts</h3>
                            </div>
                            {filterForts.map((fort, index) => (
                                <div
                                    key={index}
                                    className="result-item"
                                    onClick={() => handleFortClick(fort.id)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div className="icon-container">
                                        <FaFortAwesome className="icon" />
                                    </div>
                                    <div className="item-details">
                                        <div className="item-name">{fort.name}</div>
                                        <div className="item-type">Fort • {fort.district}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* No Results Message */}
                    {filterPlaces.length === 0 && filterForts.length === 0 && (
                        <div className="no-results">
                            No results found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
